import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// data will come throgh many resources like forms, json, url

// firstly -> we configure when data will come from form or json
app.use(express.json({limit: "16kb"}));

// secondly -> we configure when our data will come from url
app.use(express.urlencoded({extended: true, limit: "16kb"}));

/* thirdly -> we configure when we need to store our static files like: images, docx, pdf
in our public folder where is our assets
*/
app.use(express.static('public'));

/* cookie-parser -> we use cookie-parser to access and also set the cookie of user's 
browser from our server.
*/
app.use(cookieParser());


export {app};