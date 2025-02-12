import problem from "../models/problemModel.js"

export const getRandomProblem = async (req, res) => {
    try {
        const randomProblem = await problem.aggregate([{ $sample: { size: 1 } }]); //Método de MongoDB para obtener un documento aleatorio.

        console.log("Problema aleatorio enviado:", randomProblem);

        if (!randomProblem || randomProblem.length === 0) {
            console.error("No problems found in the Database.");
            return res.status(404).json({ message: "No problems found" });
        }

        console.log("Random problem sent:", randomProblem[0]);

        res.set("Cache-Control", "no-store, no-cache, must-revalidate, private"); // Evitar caché de la respuesta

        return res.status(200).json(randomProblem[0]); // Enviar un solo problema en lugar de un array
    } catch (error) {
        console.error("⚠️ Error en getRandomProblem:", error);
        res.status(500).json({ message: "Internal server error", error });
    }
};
