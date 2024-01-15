import mongoose from "mongoose";

export const connectdatabase = mongoose.connect(process.env.mongo_url, { dbName: "backendAPI", })
    .then(() => console.log("Connected"))
    .catch((e) => console.log(e));