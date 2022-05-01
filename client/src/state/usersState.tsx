import create from 'zustand';

type UserType = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  newsletter: boolean;
};

type UsersStateType = {
  users: UserType[] | void;
  setUsers: (users: UserType[] | void) => void;
};

export const UsersState = create<UsersStateType>((set, get) => {
  return {
    users: [],
    setUsers(users) {
      set({ users });
      return users;
    },
    action: () => {
      const users = get().users;
      return users;
    },
  };
});
