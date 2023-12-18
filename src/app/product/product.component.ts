import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Category} from "../models/category";
import {Product} from "../models/product";
import {CATEGORIES} from "../models/CATEGORIES";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  product: Product = CATEGORIES[0].products[0];
  category!: Category;
  categories: Category[] = CATEGORIES;

  constructor(private activeRoute: ActivatedRoute) {
    // this.activeRoute.params.subscribe(params => {
    //   this.product = this.category.products[params["productId"] - 1];
    //   console.log(this.category);
    // })
  }

}
