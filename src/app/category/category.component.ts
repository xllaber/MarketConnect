import {Component, Input} from '@angular/core';
import {Category} from "../models/category";
import {CATEGORIES} from "../models/CATEGORIES";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  categories: Category[] = CATEGORIES;
  category: any = {};
  // @Input() id!:number;

  constructor(private activeRoute: ActivatedRoute,
              private router: Router) {
    this.activeRoute.params.subscribe(params => {
      this.category = this.getCategory(params["id"] - 1);
      console.log(this.category);
    });
  }

  getCategory(id: number) {
    return this.categories[id];
  }

  showProduct(productId: number) {
    this.router.navigate(["/product", productId]);
  }

}
