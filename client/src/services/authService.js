import { requestFactory } from "../utils/requestFactory";
export const authServiceFactory = () => {
	const request = requestFactory();
	const login = async (credentials) => {
		const result = await request.POST(
			"http://localhost:3000/users/login",
			credentials
		);
		return result;
	};
	const register = async (credentials) => {
		const result = await request.POST(
			"http://localhost:3000/users/register",
			credentials
		);
		return result;
	};
	const logout = () => {};
	return {
		login,
		register,
		logout,
	};
};
