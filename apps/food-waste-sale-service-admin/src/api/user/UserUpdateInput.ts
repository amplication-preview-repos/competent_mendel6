import { OrderUpdateManyWithoutUsersInput } from "./OrderUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  orders?: OrderUpdateManyWithoutUsersInput;
  password?: string | null;
  roles?: "Option1" | null;
  username?: string | null;
};
