import { Router } from "express";
import { getRandomProblem } from "../controllers/problemController.js";

const problemRoute = Router();

problemRoute.get("/random-problem", async (req, res) => {
    try {
        // Filtrar problemas que contengan la palabra "mate" en Themes
        const randomProblem = await ChessProblem.aggregate([
          { $match: { Themes: { $regex: "\\bmate\\b", $options: "i" } } }, // Filtra por la palabra "mate"
          { $sample: { size: 1 } } // Obtiene un problema aleatorio
        ]);

    if (!randomProblem || randomProblem.length === 0) {
        return res.status(404).json({ message: "No problems found." });
    }
    res.json(randomProblem[0]); // Devuelve el primer problema aleatorio encontrado
    } catch (error) {
        console.error("Error fetching random problem:", error);
        res.status(500).json({ message: "Server error" });
    }
});

export default problemRoute;