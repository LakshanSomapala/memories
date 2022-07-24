import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import postRoutes from "./routes/postRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import dotenv from "dotenv";

//initialise the app
const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true })); // big mb cos sending images
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//add prefix to the url
app.use("/posts", postRoutes);
app.use("/user", userRoutes);

app.get("/", (req, res) => {
	res.send("Hello to memories API");
});

const PORT = process.env.PORT || 5001;

//connecting to Mongo DB
mongoose
	.connect(process.env.CONNECTION_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(
		() => mongoose.connection,
		app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
	)
	.catch((error) => console.log(error.message));

// mongoose.set("useFindAndModify", false); // No longer needed
