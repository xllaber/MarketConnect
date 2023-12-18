import {NutritionalInfo} from "./nutritional-info";

export interface Product {
  id: number;
  name: string;
  img: string;
  nutritionalInfo: NutritionalInfo;
}
