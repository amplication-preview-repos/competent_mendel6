import { OrderCreateNestedManyWithoutUsersInput } from "./OrderCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  orders?: OrderCreateNestedManyWithoutUsersInput;
  password?: string | null;
  roles?: "Option1" | null;
  username?: string | null;
};
