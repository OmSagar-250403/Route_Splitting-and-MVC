import { app } from "./Routing_app.js";
import { connectdatabase } from "./data/database.js";

connectdatabase;
console.log(process.env.port);
app.listen(4000, (err) => {
    if (err) {
        console.error("Error starting the server:", err);
    } else {
        console.log("Server is running on port 4000");
    }
})





