import Hashtag from "../models/hashtag";

class HashtagRepository {
	async createHashtag(data) {
		try {
			const hashtag = await Hashtag.create();
			return hashtag;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
	async bulkCreate(data) {
		try {
			const response = await hashtag.insertMany(data);
			return response;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async getHashtagByName(name) {
		try {
			const hashtag = await hashtag.findById(id);
			return hashtag;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async getHashtag(id) {
		try {
			const hashtag = await hashtag.findById(id);
			return hashtag;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async deletehashtag(id) {
		try {
			const response = await hashtag.deleteOne(id);
			return response;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}

export default HashtagRepository;
