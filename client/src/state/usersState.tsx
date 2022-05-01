import create from 'zustand';

// add type for users when everything works with zustand

type UserType = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  newsletter: boolean;
};

type UsersStateType = {
  users: any | null;
  setUsers: (users: any) => void;
};

export const UsersState = create<UsersStateType>((set, get) => {
  return {
    users: {},
    setUsers(users) {
      set({ users });
    },
    action: () => {
      const users = get().users;
      return users;
    },
  };
});
