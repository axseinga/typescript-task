import { Request, Response, Router } from "express";

const USERS = [
    {
        id: 1,
        firstName: "Aga",
        lastName: "Urbanowicz",
        email: "agnes@agnes.com",
        password: "superSecret",
    },
];

export const getUsers = (req: Request, res: Response) => {
    res.send(USERS);
};
