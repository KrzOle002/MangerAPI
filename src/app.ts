import express from "express";
import PlayerModel from "./models/player";
import ClubModel from "./models/club";

const app = express();

app.get("/", async (req, res) => {
    const players = await PlayerModel.find().exec();
    res.status(200).json(players);
});

export default app;
