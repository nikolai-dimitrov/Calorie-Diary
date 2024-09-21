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
                        authenticate: async (credentials, action) => {
                            try {
                                const userData = await action(credentials);
                                const user = { ...userData.data.user, 'accessToken': userData.data.accessToken };
                                set({ user: user });
                                set((state) => ({ ...state, serverError: '' }));
                                return true;

                            } catch (error) {
                                set((state) => ({ ...state, serverError: error.message }));
                                return false;
                            }
                        },

                        login: async (credentials) => {
                            const authService = authServiceFactory();
                            const result = await useAuthStore.getState().authenticate(credentials, authService.login)
                            return result
                        },

                        register: async (credentials) => {
                            const authService = authServiceFactory();
                            useAuthStore.getState().authenticate(credentials, authService.register)
                        },

                        logout: () => {
                            // authService.logout();
                            set({ user: null });
                            localStorage.removeItem('user');

                        }
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

