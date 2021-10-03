import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose' ;
import cors from 'cors';

const app = express();

app.use(bodyParser.json({limit: "20mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended:true}));

app.use(cors());

const COONECTION_URL = ''


const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser:true, useUnifiedTopology:true
}).then(() =>console.log(err.message))

mongoose.set('useFindAndModify', false);