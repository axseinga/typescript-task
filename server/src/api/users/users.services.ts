import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { IUser } from "./users.model";

const prisma = new PrismaClient();

export const getAllUsers = async () => {
    try {
        const users = await prisma.user.findMany();
        return users;
    } catch (error) {
        throw Error("Error while getting users");
    }
};

export const getUser = async (id: number) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: id,
            },
        });
        return user;
    } catch (error) {
        throw Error("Error while getting user");
    }
};

export const createUser = async (newUser: IUser) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newUser.password, salt);

        const user = await prisma.user.create({
            data: {
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                password: hashedPassword,
                newsletter: newUser.newsletter,
            },
        });
    } catch (error) {
        throw Error("Error while creating user");
    }
};

export const updateUserEmail = async (id: number, email: string) => {
    try {
        const updatedUser = await prisma.user.update({
            where: {
                id: id,
            },
            data: {
                email: email,
            },
        });
        return updatedUser;
    } catch (error) {
        throw Error("Error while updating user");
    }
};

export const deleteUser = async (id: number) => {
    try {
        const deletedUser = await prisma.user.delete({
            where: {
                id: id,
            },
        });

        return deletedUser;
    } catch (error) {
        throw Error("Error while deleting user");
    }
};
