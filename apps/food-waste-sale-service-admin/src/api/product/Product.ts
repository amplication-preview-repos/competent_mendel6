import { Category } from "../category/Category";
import { Order } from "../order/Order";

export type Product = {
  category?: Category | null;
  createdAt: Date;
  description: string | null;
  expirationDate: Date | null;
  id: string;
  name: string | null;
  orders?: Array<Order>;
  price: number | null;
  quantity: number | null;
  updatedAt: Date;
};
