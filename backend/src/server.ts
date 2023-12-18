import app  from "./app"
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/inership-test")
    .then(() => {
        console.log("Mongoose connected");
        app.listen(5000, () => {
            console.log("Server running on port: " + 5000);
        });
    })
.catch(console.error);