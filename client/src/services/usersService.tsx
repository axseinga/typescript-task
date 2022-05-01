import axios from 'axios';

const baseUrl = process.env.REACT_APP_API;

type UserType = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  newsletter: boolean;
};

export const getAllUsers = async (): Promise<UserType[] | void> => {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const response = await axios.get(baseUrl);
    return response?.data?.data?.users;
  } catch (error) {
    throw new Error(`Cannot get users. Error: ${error}`);
  }
};

export const getUserById = async (id: string): Promise<UserType | void> => {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const response = await axios.get(`${baseUrl}id`);
    return response.data;
  } catch (error) {
    throw new Error(`Cannot get user. Error: ${error}`);
  }
};

export const updateUserEmailById = async (id: string, email: string): Promise<UserType | void> => {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const response = await axios.get(`${baseUrl}id`);
    return response.data;
  } catch (error) {
    throw new Error(`Cannot update user's email. Error: ${error}`);
  }
};

export const deleteUserById = async (id: string): Promise<null | void> => {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const response = await axios.get(`${baseUrl}id`);
    return response.data;
  } catch (error) {
    throw new Error(`Cannot delete user. Error: ${error}`);
  }
};
