import mongoose from "mongoose";
import type { ICat} from "../types/cats.types.ts"

export let catSchema = new mongoose.Schema<ICat>(
   {
     name: {
        type: String,
        required: true,      
    },
    breed: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    kidsFriendly: {
        type: Boolean,
        required: true
    },
    apartmentFriendly: {
        type: Boolean,
        required: true
    },
    lifeSpan: {
        type: Number,
        default: 1,
    },
    energyLevel: {
        type: String,
        required: true,
    },
   
    image: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
   },
   {
    timestamps: true,
   }
   
);

let CatModel = mongoose.model("Cat", catSchema);

export default CatModel;