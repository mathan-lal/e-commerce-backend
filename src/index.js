/*import mongoose from "mongoose";
import {DB_NAME} from './constants.js';*/
import connectDB from "./db/index.js";
import dotenv from 'dotenv';
/*import express from 'express';
const app = express();/*

/* This is over first approch to connect Database

// in professional code , we often use semi-collon at the starting of IIFE, for the cleaning purpose
;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log('ERR: ', error);
            throw error
        });

        app.listen(process.env.PORT, () => {
            console.log(`App is listening at: ${process.env.PORT}`);
        });
    } catch (error) {
        console.log(`Error while connecting to database: ${error}`);
        throw error;
    }
})()*/

/* 2nd approch is that, we wil create another file, which also index in the db folder for database connection,
and we will just call it in this index file, the purpose is that we con't pollute our index file.
and this is the professional way.
*/

dotenv.config({
    path: './env'
})

connectDB();