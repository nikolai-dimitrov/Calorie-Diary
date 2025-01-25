import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { profileServiceFactory } from '../services/profileService';

export const useProfileStore = create(
    devtools(
        (set) => {
            return (
                {
                    profile: null,
                    serverError: '',
                    createProfile: async (profileData) => {
                        try {
                            const profileService = profileServiceFactory();
                            const responseResult = await profileService.createProfile(profileData);
                            set({ profile: responseResult });
                            return responseResult.status;
                        } catch (error) {
                            set((state) => ({ ...state, serverError: error.message }));
                            return error.status;

                        }
                    },

                    clearServerErrors: () => {
                        set({ serverError: null });
                    }
                })
        },
    )
)