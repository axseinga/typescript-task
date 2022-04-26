import { Request, Response, Router } from "express";
import UsersRoutes from "./users/users.router";

const router = Router();

router.use("/users", UsersRoutes);

export default router;
