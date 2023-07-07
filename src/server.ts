import env from "./utils/validateEnv";
import mongoose from "mongoose";
import app from "./app";

const port = env.PORT;

mongoose
    .connect(env.MONGODB_CONNECT)
    .then(() => {
        console.log("Mongo Connect");
        app.listen(port, () => {
            console.log("Server running on port: " + port);
        });
    })
    .catch(console.error);
