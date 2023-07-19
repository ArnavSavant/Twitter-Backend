import express from "express";
import { connect } from "./config/database.js";
import Tweet from "./models/tweet.js";
import Hashtag from "./models/hashtag.js";
import TweetRepository from "./repositories/tweet-repository.js";
const app = express();

app.listen(3000, async () => {
	console.log("Server is live on port:3000");

	await connect();
	console.log("Mongo DB connected");

	// await Tweet.create({
	// 	content: "This is my second tweet",
	// 	likes: "0",
	// 	noOfRetweets: "1",
	// 	comment: "This is my first comment",
	// });

	// await Hashtag.create({
	// 	text: "travel",
	// 	tweets: ["64b304526d62dc5fc21a0779"],
	// });

	const tweetRepository = new TweetRepository();
	const tweet = await tweetRepository.deleteTweet({
		"_id": "64b304526d62dc5fc21a0779",
	});
	console.log(tweet);
   console.log("Everything is LIVE");
});
