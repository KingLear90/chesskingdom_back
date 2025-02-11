import problem from "../models/problemModel.js"

export const getRandomProblem = async (req, res) => {
    try {
        const randomProblem = await problem.find({}).limit(1);
        if (randomProblem.length > 0) {
            console.log('Random problem: ', randomProblem);
            return res.status(200).json(randomProblem);
        }
    } catch (error) {
        console.error("Error fetching problem" , error);
        res.status(500).json({ message: "Internal server error", error });
    }
}