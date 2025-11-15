const USER_KEY = "app_user";

export const storage = {
  saveUser(user: any) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  },

  getUser() {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : null;
  },

  clearUser() {
    localStorage.removeItem(USER_KEY);
  }
};
