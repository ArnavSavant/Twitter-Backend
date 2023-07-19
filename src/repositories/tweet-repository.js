import Tweet from "../models/tweet.js";

class TweetRepository {
	async createTweet(data) {
		try {
			const tweet = await Tweet.create();
			return tweet;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async getAllTweets() {
		try {
			const tweets = await Tweet.find({});
			return tweets;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async getTweet(id) {
		try {
			const tweet = await Tweet.findById(id);
			return tweet;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async deleteTweet(id) {
		try {
			const response = await Tweet.deleteOne(id);
			return response;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}

export default TweetRepository;
