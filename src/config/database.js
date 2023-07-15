import mongoose from "mongoose";

export const connect = async () => {
	await mongoose.connect(
		"mongodb+srv://ArnavSavant:arnav1234@cluster0.zf6rpq9.mongodb.net/"
	);
};
