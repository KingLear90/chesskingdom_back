import mongoose from "mongoose";

const ProblemSchema = new mongoose.Schema({
    FEN: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    Moves: {
        type: Array,
        required: true,
    },
    Themes: {
        type: String,

    }
})

export default mongoose.model('problem', ProblemSchema);