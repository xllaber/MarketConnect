import {Component, OnChanges, SimpleChanges} from '@angular/core';
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
        id: 1,
        name: "Ensalada Valeciana",
        description: "Ensalada típica de la terreta",
        nutritionalInfo: {
          proteins: 2.1,
          carbohydrates: 9.5,
          fat: 9,
          kcal: 193
        },
        ingredientPrice: 5.25,
        price: 3,
        img: "assets/img/dishes/ensalada-valenciana.jpg"
      },
      {
        id: 3,
        name: "Paella Valenciana",
        description: "Plato insignia de Valencia",
        nutritionalInfo: {
          proteins: 12,
          carbohydrates: 8.7,
          fat: 21.1,
          kcal: 215
        },
        ingredientPrice: 11,
        price: 5.50,
        img: "assets/img/dishes/paella.jpg"
      },
      {
        id: 2,
        name: "Macedonia",
        description: "Mezcla de frutas de temporada",
        nutritionalInfo: {
          proteins: 1.3,
          carbohydrates: 11.5,
          fat: 3.5,
          kcal: 76
        },
        ingredientPrice: 3.27,
        price: 2,
        img: "assets/img/dishes/macedonia.jpg"
      }
    ]
  }

  constructor() {
  }

  portions = new FormControl;
  dishes = new FormControl;
  // totalPriceDishes: number = 0;
  // totalPriceIngredients: number = 0;
  //
  // ngOnChanges(changes: SimpleChanges): void {
  //   this.totalPriceDishes = this.menu.dishes[0].price * this.dishes.getRawValue() +
  //     this.menu.dishes[1].price * this.dishes.getRawValue() +
  //     this.menu.dishes[2].price * this.dishes.getRawValue();
  //   this.totalPriceIngredients = this.menu.dishes[0].price * this.portions.getRawValue() +
  //     this.menu.dishes[1].price * this.portions.getRawValue() +
  //     this.menu.dishes[2].price * this.portions.getRawValue();
  // }
  dishBuy(name: string, id:number) {
    alert(`${this.dishes.getRawValue()} raciones de ${name} añadidas al carrito exitosamente.
    Total: ${this.dishes.getRawValue() * this.menu.dishes[id - 1].price}`);
  }

  ingredientsBuy(name: string, id: number) {
    alert(`${this.portions.getRawValue()} raciones de ${name} añadidas al carrito exitosamente.
    Total: ${this.portions.getRawValue() * this.menu.dishes[id - 1].price}`);
  }
}
