import { Router } from "express";
import { getUsers } from "./users.conroller";

const router = Router();

router.route("/").get(getUsers);

export default router;
