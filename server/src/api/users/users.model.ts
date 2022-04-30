import { Request } from "express";

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
    extends Request<{ id: IUser["id"] }, any, IUser> {}
export interface IDeleteUserReq extends Request<{ id: IUser["id"] }> {}
