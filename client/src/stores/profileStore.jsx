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
                            const result = await profileService.createProfile(profileData);
                            set({ profile: result })
                        } catch (error) {
                            set((state) => ({ ...state, serverError: error.message }));

                        }
                    },

                    clearServerErrors: () => {
                        set({ serverError: null });
                    }
                })
        },
    )
)