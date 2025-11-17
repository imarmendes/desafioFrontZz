export const validators = {
  isEmail(value: string): boolean {
    return /\S+@\S+\.\S+/.test(value);
  },

  required(value: string): boolean {
    return value.trim().length > 0;
  }
};
