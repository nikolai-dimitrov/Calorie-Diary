import { requestFactory } from "../utils/requestFactory";

export const profileServiceFactory = () => {
	//
	const request = requestFactory();

	const getProfile = async () => {
		const result = await request.GET("http://localhost:3000/profiles");
		return result;
	};
	const createProfile = () => {};
	const updateProfile = () => {};

	return {
		getProfile,
		createProfile,
		updateProfile,
	};
};
