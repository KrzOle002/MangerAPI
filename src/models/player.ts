import { InferSchemaType, Schema, model } from "mongoose";

const playerSchema = new Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    country: { type: String, required: true },
    birthDate: { type: Date, required: true },
    position: { type: String, required: true },
    number: { type: Number, required: true },
    height: { type: Number, required: true },
    weigth: { type: Number, required: true },
    foot: { type: String, required: true },
    club_id: { type: String, required: true },
});

type Player = InferSchemaType<typeof playerSchema>;

export default model<Player>("Player", playerSchema);
