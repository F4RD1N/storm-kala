//create database connection

import mongoose from 'mongoose';

const main = async () => await mongoose.connect(process.env.MONGO_URI);

export default main;