import problem from "../models/problemModel.js"

export const getProblem = async (req, res) => {
    try {
        const chessProblem = await problem.find();

        res.set("Cache-Control", "no-store, no-cache, must-revalidate, private"); // Evitar caché de la respuesta

        return res.status(200).json(chessProblem); // Enviar un solo problema en lugar de un array
    } catch (error) {
        console.error("⚠️ Error en getRandomProblem:", error);
        res.status(500).json({ message: "Internal server error", error });
    }
};
