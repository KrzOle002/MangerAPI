import express from "express";
import PlayerModel from "./models/player";
import ClubModel from "./models/club";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello String");
});

export default app;
