import { Router } from "express";
import {
    getAllUsers,
    getUser,
    createUser,
    updateUserEmail,
    deleteUser,
} from "./users.controller";

const router = Router();

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUser).put(updateUserEmail).delete(deleteUser);

export default router;
