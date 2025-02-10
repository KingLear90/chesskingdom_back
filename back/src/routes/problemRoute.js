import { Router } from "express";
import { getRandomProblem } from "../controllers/problemController.js";

const problemRoute = Router();

problemRoute.get("/random-problem", getRandomProblem);

export default problemRoute;