import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import posts from './router/posts.js';
import mongoose from "mongoose";

const app = express();
const PORT = process.env.port || 5000;

app.use(bodyParser.json({limit: '30mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb'}));
app.use(cors());

app.use('/posts', posts);
// mongodb+srv://<username>:<password>@cluster0.badzaod.mongodb.net/
const URI ='mongodb+srv://admin:l4wbkHYSNqMl7PRi@cluster0.badzaod.mongodb.net/';
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("Conneted to DB");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err=>{ 
    console.log('err',err)
})
app.get('/', (req, res) => {
    res.send('Success!');
});

