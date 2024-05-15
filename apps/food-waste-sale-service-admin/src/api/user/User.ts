import { Order } from "../order/Order";

export type User = {
  createdAt: Date;
  email: string | null;
  id: string;
  orders?: Array<Order>;
  password: string | null;
  roles?: "Option1" | null;
  updatedAt: Date;
  username: string | null;
};
