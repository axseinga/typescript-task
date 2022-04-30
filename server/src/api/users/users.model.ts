import { Request, Response } from "express";

export type rawUserType = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    newsletter: boolean;
};

export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    newsletter: boolean;
}

export interface IGetUsersReq extends Request {}
export interface IGetUserReq extends Request<{ id: IUser["id"] }> {}
export interface ICreateUserReq extends IUser, Request {}
export interface IUpdateUserEmailReq
    extends Request<{ id: IUser["id"] }, { email: IUser["email"] }, IUser> {}
export interface IDeleteUserReq extends Request<{ id: IUser["id"] }> {}

export interface IGetUsersRes extends IUser, Response {}
