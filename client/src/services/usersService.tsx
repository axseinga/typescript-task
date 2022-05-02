import axios from 'axios';

const baseUrl = process.env.REACT_APP_API;

type UserType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  newsletter: boolean;
};

type UserStateType = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  newsletter: boolean;
};

export const getAllUsers = async (): Promise<UserStateType[] | void> => {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const response = await axios.get(baseUrl);
    return response?.data?.data?.users;
  } catch (error) {
    throw new Error(`Cannot get users. Error: ${error}`);
  }
};

export const getUserById = async (id: number): Promise<UserStateType | void> => {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const response = await axios.get(`${baseUrl}${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Cannot get user. Error: ${error}`);
  }
};

export const createUser = async (user: UserType): Promise<UserStateType | void> => {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const response = await axios.post(baseUrl, user);
    return response.data;
  } catch (error) {
    throw new Error(`Cannot create an user. Error: ${error}`);
  }
};

export const updateUserEmailById = async (id: number, email: string): Promise<UserStateType | void> => {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    console.log(id, email);
    const response = await axios.put(`${baseUrl}${id}`, { email });
    return response.data;
  } catch (error) {
    throw new Error(`Cannot update user's email. Error: ${error}`);
  }
};

export const deleteUserById = async (id: number): Promise<null | void> => {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const response = await axios.delete(`${baseUrl}${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Cannot delete user. Error: ${error}`);
  }
};
