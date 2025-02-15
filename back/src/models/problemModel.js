import mongoose from "mongoose";

const ProblemSchema = new mongoose.Schema({
    fen: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    solution: {
        type: Array,
        required: true,
    },
    side: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
    },
    difficulty: {
        type: Number,
    },
    author: {
        type: String,
    }
})

export default mongoose.model('problem', ProblemSchema);