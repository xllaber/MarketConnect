import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.scss']
})
export class MenuViewComponent {
  menu: any = {
    dishes: [
      {
        name: "Ensalada Valeciana",
        description: "Ensalada típica de la terreta",
        nutritionalInfo: {
          proteins: 2.1,
          carbohydrates: 9.5,
          fat: 9,
          kcal: 193
        },
        img: "assets/img/dishes/ensalada-valenciana.jpg"
      },
      {
        name: "Paella Valenciana",
        description: "Plato insignia de Valencia",
        nutritionalInfo: {
          proteins: 12,
          carbohydrates: 8.7,
          fat: 21.1,
          kcal: 215
        },
        img: "assets/img/dishes/paella.jpg"
      },
      {
        name: "Macedonia",
        description: "Mezcla de frutas de temporada",
        nutritionalInfo: {
          proteins: 1.3,
          carbohydrates: 11.5,
          fat: 3.5,
          kcal: 76
        },
        img: "assets/img/dishes/macedonia.jpg"
      }
    ]
  }

  constructor() {
  }

  portions = new FormControl;
  dishes = new FormControl;
  dishBuy(name: string) {
    alert(`${this.dishes.getRawValue()} raciones de ${name} añadidas al carrito exitosamente`);
  }

  ingredientsBuy(name: string) {
    alert(`${this.portions.getRawValue()} raciones de ${name} añadidas al carrito exitosamente`)
  }
}
