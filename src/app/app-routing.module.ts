import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CategoryComponent} from "./category/category.component";
import {ProductComponent} from "./product/product.component";
import {MenuComponent} from "./menu/menu.component";
import {MenuViewComponent} from "./menu-view/menu-view.component";

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "category", component: CategoryComponent},
  {path: "category/:id", component: CategoryComponent},
  {path: "product/:productId", component: ProductComponent},
  {path: "menu/:id", component: MenuViewComponent},
  {path: "**", pathMatch: "full", redirectTo: "home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
