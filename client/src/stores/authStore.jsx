import { create } from 'zustand';
import { persist, devtools, createJSONStorage } from 'zustand/middleware';
import { authServiceFactory } from '../services/authService'

export const useAuthStore = create(
	devtools(
		persist(
			(set) => {
				return (
					{
						user: null,
						serverError: '',
						// On page reload / manually type url -> enable guest required route guard 
						isDisabledGuestRequiredGuard: false,
						authenticate: async (credentials, action) => {
							try {
								const responseResult = await action(credentials);
								const user = { ...responseResult.data.user, 'accessToken': responseResult.data.accessToken };
								set({ user: user });

								// Set isDisabledGuestRequiredRouteGuard to true if login is successful because i want to redirect to create profile on login by useEffect instead of route guard redirection.
								set((state) => ({ ...state, serverError: '', isDisabledGuestRequiredGuard: true }));
								return responseResult.status;

							} catch (error) {
								set((state) => ({ ...state, serverError: error.message }));
								return error.status;
							}
						},

						login: async (credentials) => {
							const authService = authServiceFactory();
							const result = await useAuthStore.getState().authenticate(credentials, authService.login)
							return result
						},

						register: async (credentials) => {
							const authService = authServiceFactory();
							const result = useAuthStore.getState().authenticate(credentials, authService.register)
							return result
						},

						logout: () => {
							// authService.logout();
							set({ user: null });
							localStorage.removeItem('user');

						},

						clearServerErrors: () => {
							set({ serverError: '' });
						},

					})
			},
			{
				name: 'user',
				storage: createJSONStorage(() => localStorage),
				partialize: (state) => {
					return { user: state.user }
				}
			}
		)
	)
)

