import {Product} from "./product";

export interface Category {
  id: number;
  name: string;
  img: string;
  products: Product[];
}
