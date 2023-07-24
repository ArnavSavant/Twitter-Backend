import TweetRepository from "../repositories/tweet-repository";
import HashtagRepository from "../repositories/hashtag-repository";

class TweetService {
	constructor() {
		this.tweetRepository = new TweetRepository();
		this.hashTagRepositoy = new HashtagRepository();
	}

	async create(data) {
		const content = data.content;
		const tags = content
			.match(/#+[a-zA-Z0-9(_)]+/g)
			.map((tag) => tag.substring(1).toLowerCase());
	}
}
