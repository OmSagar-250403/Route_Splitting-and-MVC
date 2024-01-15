import express from "express";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017", { dbName: "backendAPI", })
    .then(() => console.log("Connected"))
    .catch((e) => console.log(e));

const schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

const Msg = mongoose.model("MessagesAPI", schema);

app.get('/users/all',async (req,res)=>{
    const k = await Msg.find({});

    res.json({
        success : "true",
        k,
    })
})

app.get('/userid',async(req,res)=>{
    //const {id} = req.body;
    const {id} = req.query;
    const k = await Msg.findById(id);  // Object nahi Leta hai, Direct value leta hai
    res.json({
        success : "true",
        k,
    })
})

app.post('/users',async (req,res)=>{
    const { name,email,password } = req.body;
    await Msg.create({
        name,
        email,
        password,
    });

    console.log(email);
    
    res.status(201).cookie("temp","lol").json({
        success:"true",
        message:"resgistered successfully",
    });
    
})

app.get('/', (req, res) => {
    res.json({
        success:"true",
        message:"resgistered successfully",
    });
    res.send("HI");
})

app.listen(4000, (err) => {
    if (err) {
        console.error("Error starting the server:", err);
    } else {
        console.log("Server is running on port 4000");
    }
})