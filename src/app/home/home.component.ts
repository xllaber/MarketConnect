import {Component, EventEmitter, Output} from '@angular/core';
import {Category} from "../models/category";
import {CATEGORIES} from "../models/CATEGORIES";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  heroBanner: string = "assets/img/hero-banner.png";
  categories: Category[] = CATEGORIES;
  @Output() categorySelect!: EventEmitter<number>;

  constructor(private router: Router) {}

  showCategory(id: number) {
    console.log("JOLA");
    this.router.navigate(["/category", id]);
  }

}
