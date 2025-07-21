import type { CreatedUser } from '../api/endpoints/api.users';

export const LocalStorage = {
  onSetUser: (user: CreatedUser) => localStorage.setItem("auth_user", JSON.stringify(user)),
  onGetUser: () => {
    const user = localStorage.getItem("auth_user");
    return user ? JSON.parse(user) : null;
  },
  onRemoveUser: () => localStorage.removeItem("auth_user"),
};
