import Msg from "../models/user.js";

export const getallusers = async (req,res)=>{
    const k = await Msg.find({});
    //res.send(req.query);
    res.json({
        success : "true",
        k,
    })
}

export const get_id = async(req,res)=>{
    //const {id} = req.body;
    const {id} = req.params;
    const k = await Msg.findById(id);  // Object nahi Leta hai, Direct value leta hai
    res.json({
        success : "true",
        k,
    })
}

export const registeruser = async (req,res)=>{
    const { name,email,password } = req.body;
    await Msg.create({
        name,
        email,
        password,
    });

    console.log(email);
    
    res.status(201).cookie("temp","lol").json({
        success:"true",
        message:"resgistered successfully bro",
    });
    
}

