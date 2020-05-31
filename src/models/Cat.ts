import mongoose  from "mongoose";

export const Cat = mongoose.model('Cat', new mongoose.Schema({
    name: String
}));