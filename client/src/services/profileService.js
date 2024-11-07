import { requestFactory } from "../utils/requestFactory";

export const profileServiceFactory = () => {
	//
	const request = requestFactory();

	const getProfile = async () => {
		const result = await request.GET("http://localhost:3000/profiles");
		return result;
	};
	const createProfile = async (profileData) => {
		const result = await request.POST(
			"http://localhost:3000/profiles",
			profileData
		);
		return result;
	};
	const updateProfile = () => {};

	return {
		getProfile,
		createProfile,
		updateProfile,
	};
};
