import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

const Msg = mongoose.model("MessagesAPI", schema);
export default Msg;