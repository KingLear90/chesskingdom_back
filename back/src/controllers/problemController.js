import problem from "../models/problemModel.js"

export const getRandomProblem = async (req, res) => {
    try {
        const randomProblem = await problem.aggregate([{ $sample: { size: 1 } }]);
        console.log('Random problem: ', randomProblem);
        res.status(200).json(randomProblem);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error", error });
    }
}