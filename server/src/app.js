const express = require("express");

const app = express();
const port = 3000;

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

// function createCustomTimeout(seconds, message) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			console.log(message);
// 			resolve();
// 		}, seconds * 1);
// 	});
// }

// const startFunc = async () => {
// 	await func1();
// 	await func2();
// };

// const func1 = async () => {
// 	await createCustomTimeout(2, "func 1 slower func");
// 	console.log("func 1 after timeout");
// };

// const func2 = async () => {
// 	await createCustomTimeout(1, "func 2 faster func");
// 	console.log("func 2 after timeout");
// };

// // startFunc();
// func1();
// func2();

//// 2 callbacks
function fetchData(url, callback) {
	setTimeout(() => {
		const data = { name: "john", age: "20" };
		callback(null, data);
	}, 1000);
}

function displayData(err, data) {
	if (err) {
		console.log("err");
	} else {
		console.log("data:", data);
	}
}

fetchData("http://localhost:5050", displayData);
