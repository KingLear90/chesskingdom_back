import { Router } from "express";
import { getProblem } from "../controllers/problemController.js";

const problemRoute = Router();

problemRoute.get("/get", getProblem);

export default problemRoute;