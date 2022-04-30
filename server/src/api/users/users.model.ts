import { Request } from "express";

export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface IGetUsersReq extends Request {}
export interface IGetUserReq extends Request<{ id: IUser["id"] }> {}
export interface IAddUserReq extends Request {}
export interface IUpdateUserReq
    extends Request<{ id: IUser["id"] }, any, IUser> {}
export interface IDeleteUserReq extends Request<{ id: IUser["id"] }> {}
