import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  orders?: OrderListRelationFilter;
  password?: StringNullableFilter;
  roles?: "Option1";
  username?: StringNullableFilter;
};
