import { Mongoose } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

Mongoose.connect(MONGODB_URI)
	.then((x) => {
		const dbName = x.connections[0].name;
		console.log(`Connected to Mongo! Database name: ${dbName}`);
	})
	.catch((err) => {
		console.error('Error connecing to mongo: ', err);
	});
