import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
	try {
		const header = req.headers.authorization;
		const token = header.split(" ")[1];
		// const token3 =
		// 	req.body.token || req.query.token || req.headers["authorization"];

		const isCustomeAuth = token.length > 150;
		console.log(isCustomeAuth);
		console.log(token);
		let decodedData;

		if (token && isCustomeAuth) {
			decodedData = jwt.verify(token, "test");
			console.log(decodedData);
			req.userId = decodedData.id;
		} else {
			req.userId = token;
		}

		next();
	} catch (error) {
		console.log(error);
	}
};

export default authMiddleware;
