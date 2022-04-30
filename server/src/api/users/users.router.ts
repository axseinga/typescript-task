import { Router } from "express";
import {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
} from "./users.controller";

const router = Router();

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

export default router;
