import axios from 'axios';

const baseUrl: string = process.env.REACT_APP_API || '';

interface UserI {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  newsletter: boolean;
}

interface UserStateI extends UserI {
  id: number;
}

export const getAllUsers = async (): Promise<UserStateI[] | void> => {
  try {
    const response = await axios.get(baseUrl);
    return response?.data?.data?.users;
  } catch (error) {
    throw new Error(`Cannot get users. Error: ${error}`);
  }
};

export const getUserById = async (id: number): Promise<UserStateI | void> => {
  try {
    const response = await axios.get(`${baseUrl}${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Cannot get user. Error: ${error}`);
  }
};

export const createUser = async (user: UserI): Promise<UserStateI | void> => {
  try {
    const response = await axios.post(baseUrl, user);
    return response.data;
  } catch (error) {
    throw new Error(`Cannot create an user. Error: ${error}`);
  }
};

export const updateUserEmailById = async (id: number, email: string): Promise<UserStateI | void> => {
  try {
    console.log(id, email);
    const response = await axios.put(`${baseUrl}${id}`, { email });
    return response.data;
  } catch (error) {
    throw new Error(`Cannot update user's email. Error: ${error}`);
  }
};

export const deleteUserById = async (id: number): Promise<null | void> => {
  try {
    const response = await axios.delete(`${baseUrl}${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Cannot delete user. Error: ${error}`);
  }
};
