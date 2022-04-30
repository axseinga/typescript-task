import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany();

        if (users.length === 0) {
            return res.status(404).json({
                message: "Users not found",
            });
        }

        res.status(200).json({
            status: "success",
            results: users.length,
            data: { users },
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Server Error",
        });
    }
};

export const getUser = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);

        const user = await prisma.user.findUnique({
            where: {
                id: id,
            },
        });

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        res.status(200).json({
            status: "success",
            data: { user },
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Server Error",
        });
    }
};

export const createUser = async (req: Request, res: Response) => {
    try {
        const { firstName, lastName, email, password, newsletter } = req.body;

        const user = await prisma.user.create({
            data: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                newsletter: newsletter,
            },
        });

        res.status(201).json({
            status: "success",
            data: {
                user,
            },
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Server Error",
        });
    }
};

// route / instead of /:id ??? /

export const updateUserEmail = async (req: Request, res: Response) => {
    try {
        const { email } = req.body;
        const id = Number(req.params.id);

        const updatedUser = await prisma.user.update({
            where: {
                id: id,
            },
            data: {
                email: email,
            },
        });

        res.status(200).json({
            status: "success",
            data: { updatedUser },
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Server Error",
        });
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);

        const deletedUser = await prisma.user.delete({
            where: {
                id: id,
            },
        });

        res.status(204).json({
            status: "success",
            data: null,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Server Error",
        });
    }
};
