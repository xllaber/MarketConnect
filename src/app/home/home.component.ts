import { Component } from '@angular/core';
import {Category} from "../models/category";
import {CATEGORIES} from "../models/CATEGORIES";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  heroBanner: string = "assets/img/hero-banner.png";
  categories: Category[] = CATEGORIES;

}
