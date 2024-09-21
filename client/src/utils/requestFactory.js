const requester = async (method, token, url, data) => {
	let options = {
		method: method,
		headers: {
			"Content-Type": "application/json",
		},
	};

	if (data) {
		options.body = JSON.stringify(data);
	}

	if (token) {
		options.headers["X-Authorization"] = token;
	}

	let response = await fetch(url, options);
	let result = await response.json();

	if (!response.ok) {
		throw result;
	}
	return result;
};

export const requestFactory = () => {
	let token = undefined;
	let userData = localStorage.getItem("user");
	if (userData) {
		const serializedUserData = JSON.parse(userData);
		if (serializedUserData?.state.user != null) {
			token = serializedUserData.state.user.accessToken;
		}
	}

	return {
		GET: requester.bind(null, "GET", token),
		POST: requester.bind(null, "POST", token),
		PUT: requester.bind(null, "PUT", token),
		DELETE: requester.bind(null, "DELETE", token),
	};
};
