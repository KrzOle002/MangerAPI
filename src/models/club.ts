import { InferSchemaType, Schema, model } from "mongoose";

const club = new Schema(
    {
        name: { type: String, required: true },
        clubName: { type: String, required: true },
    },
    { timestamps: true }
);

type Club = InferSchemaType<typeof club>;

export default model<Club>("Club", club);
