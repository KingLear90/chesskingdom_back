import { Router } from "express";
import { getRandomProblem } from "../controllers/problemController.js";

const problemRoute = Router();

problemRoute.get("/get-random", getRandomProblem);

export default problemRoute;