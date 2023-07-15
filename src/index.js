import express from "express";
import { connect } from "./config/database.js";
import Tweet from "./models/tweet.js";
const app = express();

app.listen(3000, async () => {
	console.log("Server is live on port:3000");

	await connect();
	console.log("Mongo DB connected");

	await Tweet.create({
		content: "This is my first tweet",
		likes: "0",
		noOfRetweets: "0",
		comment: "This is my first comment",
	});
   console.log("hello");
});
