import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.aj2za.mongodb.net/?retryWrites=true&w=majority`;
export const client = new MongoClient(uri, { useNewUrlParser: true });
