import {Category} from "./category";

export const CATEGORIES: Category[] = [
  {
    id: 1,
    name: "Verduras",
    img: "assets/img/categories/veg.jpg",
    products: [
      {
        "id": 1,
        "name": "Espinaca",
        "img": "assets/img/products/spinach.jpg",
        "nutritionalInfo": {
          "proteins": 2.9,
          "carbohydrates": 3.6,
          "fat": 0.4,
          "kcal": 23
        }
      },
      {
        "id": 2,
        "name": "Brócoli",
        "img": "assets/img/products/broccoli.jpg",
        "nutritionalInfo": {
          "proteins": 2.8,
          "carbohydrates": 6.6,
          "fat": 0.4,
          "kcal": 34
        }
      },
      {
        "id": 3,
        "name": "Zanahoria",
        "img": "assets/img/products/carrot.jpg",
        "nutritionalInfo": {
          "proteins": 0.9,
          "carbohydrates": 9.6,
          "fat": 0.2,
          "kcal": 41
        }
      },
      {
        "id": 4,
        "name": "Tomate",
        "img": "assets/img/products/tomato.jpg",
        "nutritionalInfo": {
          "proteins": 1.2,
          "carbohydrates": 3.9,
          "fat": 0.2,
          "kcal": 18
        }
      },
      {
        "id": 5,
        "name": "Pimiento",
        "img": "assets/img/products/pepper.jpg",
        "nutritionalInfo": {
          "proteins": 1,
          "carbohydrates": 4.6,
          "fat": 0.3,
          "kcal": 20
        }
      },
      {
        "id": 6,
        "name": "Cebolla",
        "img": "assets/img/products/onion.jpg",
        "nutritionalInfo": {
          "proteins": 1.1,
          "carbohydrates": 9.3,
          "fat": 0.1,
          "kcal": 40
        }
      },
      {
        "id": 7,
        "name": "Calabacín",
        "img": "assets/img/products/zucchini.jpg",
        "nutritionalInfo": {
          "proteins": 1.2,
          "carbohydrates": 2.4,
          "fat": 0.3,
          "kcal": 17
        }
      },
      {
        "id": 8,
        "name": "Col rizada",
        "img": "assets/img/products/curly-cabbage.jpg",
        "nutritionalInfo": {
          "proteins": 4.3,
          "carbohydrates": 5.4,
          "fat": 0.9,
          "kcal": 49
        }
      },
      {
        "id": 9,
        "name": "Pepino",
        "img": "assets/img/products/cucumber.jpg",
        "nutritionalInfo": {
          "proteins": 0.7,
          "carbohydrates": 2.2,
          "fat": 0.1,
          "kcal": 12
        }
      },
      {
        "id": 10,
        "name": "Acelga",
        "img": "assets/img/products/chard.jpg",
        "nutritionalInfo": {
          "proteins": 1.8,
          "carbohydrates": 2.7,
          "fat": 0.2,
          "kcal": 19
        }
      }
    ]
  },
  {
    id: 2,
    name: "Frutas",
    img: "assets/img/categories/fruit.jpg",
    products: [
      {
        "id": 1,
        "name": "Manzana",
        "img": "assets/img/products/apple.jpg",
        "nutritionalInfo": {
          "proteins": 0.3,
          "carbohydrates": 13.8,
          "fat": 0.2,
          "kcal": 52
        }
      },
      {
        "id": 2,
        "name": "Plátano",
        "img": "assets/img/products/banana.jpg",
        "nutritionalInfo": {
          "proteins": 1.3,
          "carbohydrates": 27.5,
          "fat": 0.4,
          "kcal": 89
        }
      },
      {
        "id": 3,
        "name": "Naranja",
        "img": "assets/img/products/orange.jpg",
        "nutritionalInfo": {
          "proteins": 1.0,
          "carbohydrates": 8.2,
          "fat": 0.2,
          "kcal": 43
        }
      },
      {
        "id": 4,
        "name": "Fresa",
        "img": "assets/img/products/fruit.jpg",
        "nutritionalInfo": {
          "proteins": 0.8,
          "carbohydrates": 7.7,
          "fat": 0.4,
          "kcal": 33
        }
      },
      {
        "id": 5,
        "name": "Pera",
        "img": "assets/img/products/pear.jpg",
        "nutritionalInfo": {
          "proteins": 0.4,
          "carbohydrates": 15.5,
          "fat": 0.1,
          "kcal": 57
        }
      },
      {
        "id": 6,
        "name": "Uva",
        "img": "assets/img/products/grape.jpg",
        "nutritionalInfo": {
          "proteins": 0.6,
          "carbohydrates": 18.1,
          "fat": 0.4,
          "kcal": 69
        }
      },
      {
        "id": 7,
        "name": "Kiwi",
        "img": "assets/img/products/kiwi.jpg",
        "nutritionalInfo": {
          "proteins": 1.1,
          "carbohydrates": 14.7,
          "fat": 0.6,
          "kcal": 61
        }
      },
      {
        "id": 8,
        "name": "Piña",
        "img": "assets/img/products/pineapple.jpg",
        "nutritionalInfo": {
          "proteins": 0.5,
          "carbohydrates": 11.8,
          "fat": 0.2,
          "kcal": 50
        }
      },
      {
        "id": 9,
        "name": "Mango",
        "img": "assets/img/products/mango.jpg",
        "nutritionalInfo": {
          "proteins": 0.8,
          "carbohydrates": 14.8,
          "fat": 0.6,
          "kcal": 60
        }
      },
      {
        "id": 10,
        "name": "Sandía",
        "img": "assets/img/products/watermelon.jpg",
        "nutritionalInfo": {
          "proteins": 0.6,
          "carbohydrates": 7.6,
          "fat": 0.2,
          "kcal": 30
        }
      }
    ]
  },
  {
    id: 3,
    name: "Carnicería",
    img: "assets/img/categories/meat.jpg",
    products: [
      {
        "id": 1,
        "name": "Pollo",
        "img": "",
        "nutritionalInfo": {
          "proteins": 25,
          "carbohydrates": 0,
          "fat": 7.7,
          "kcal": 165
        }
      },
      {
        "id": 2,
        "name": "Res",
        "img": "",
        "nutritionalInfo": {
          "proteins": 26,
          "carbohydrates": 0,
          "fat": 21,
          "kcal": 250
        }
      },
      {
        "id": 3,
        "name": "Cerdo",
        "img": "",
        "nutritionalInfo": {
          "proteins": 27,
          "carbohydrates": 0,
          "fat": 10,
          "kcal": 180
        }
      },
      {
        "id": 4,
        "name": "Pavo",
        "img": "",
        "nutritionalInfo": {
          "proteins": 29,
          "carbohydrates": 0,
          "fat": 1,
          "kcal": 135
        }
      },
      {
        "id": 5,
        "name": "Cordero",
        "img": "",
        "nutritionalInfo": {
          "proteins": 25,
          "carbohydrates": 0,
          "fat": 18,
          "kcal": 230
        }
      },
      {
        "id": 6,
        "name": "Conejo",
        "img": "",
        "nutritionalInfo": {
          "proteins": 21,
          "carbohydrates": 0,
          "fat": 8,
          "kcal": 173
        }
      },
      {
        "id": 7,
        "name": "Ternera",
        "img": "",
        "nutritionalInfo": {
          "proteins": 27,
          "carbohydrates": 0,
          "fat": 5,
          "kcal": 180
        }
      },
      {
        "id": 8,
        "name": "Codorniz",
        "img": "",
        "nutritionalInfo": {
          "proteins": 19,
          "carbohydrates": 0,
          "fat": 5,
          "kcal": 140
        }
      },
    ]
  },
  {
    id: 4,
    name: "Pescadería",
    img: "assets/img/categories/fish.jpg",
    products: [
      {
        "id": 1,
        "name": "Salmón",
        "img": "",
        "nutritionalInfo": {
          "proteins": 25,
          "carbohydrates": 0,
          "fat": 13,
          "kcal": 208
        }
      },
      {
        "id": 2,
        "name": "Atún",
        "img": "",
        "nutritionalInfo": {
          "proteins": 30,
          "carbohydrates": 0,
          "fat": 7,
          "kcal": 180
        }
      },
      {
        "id": 3,
        "name": "Bacalao",
        "img": "",
        "nutritionalInfo": {
          "proteins": 18,
          "carbohydrates": 0,
          "fat": 0.7,
          "kcal": 82
        }
      },
      {
        "id": 4,
        "name": "Dorado",
        "img": "",
        "nutritionalInfo": {
          "proteins": 19,
          "carbohydrates": 0,
          "fat": 4,
          "kcal": 100
        }
      },
      {
        "id": 5,
        "name": "Trucha",
        "img": "",
        "nutritionalInfo": {
          "proteins": 21,
          "carbohydrates": 0,
          "fat": 6,
          "kcal": 149
        }
      },
      {
        "id": 6,
        "name": "Sardina",
        "img": "",
        "nutritionalInfo": {
          "proteins": 18,
          "carbohydrates": 0,
          "fat": 11,
          "kcal": 135
        }
      },
      {
        "id": 7,
        "name": "Pez espada",
        "img": "",
        "nutritionalInfo": {
          "proteins": 20,
          "carbohydrates": 0,
          "fat": 4,
          "kcal": 144
        }
      },
      {
        "id": 8,
        "name": "Merluza",
        "img": "",
        "nutritionalInfo": {
          "proteins": 17,
          "carbohydrates": 0,
          "fat": 2,
          "kcal": 95
        }
      },
      {
        "id": 9,
        "name": "Anguila",
        "img": "",
        "nutritionalInfo": {
          "proteins": 18,
          "carbohydrates": 0,
          "fat": 15,
          "kcal": 235
        }
      },
      {
        "id": 10,
        "name": "Calamar",
        "img": "",
        "nutritionalInfo": {
          "proteins": 18,
          "carbohydrates": 3,
          "fat": 1,
          "kcal": 79
        }
      }
    ]
  },
  {
    id: 5,
    name: "Charcutería",
    img: "assets/img/categories/deli.jpg",
    products: [
      {
        "id": 1,
        "name": "Jamón Serrano",
        "img": "",
        "nutritionalInfo": {
          "proteins": 30,
          "carbohydrates": 0,
          "fat": 8,
          "kcal": 195
        }
      },
      {
        "id": 2,
        "name": "Chorizo",
        "img": "",
        "nutritionalInfo": {
          "proteins": 22,
          "carbohydrates": 1.5,
          "fat": 30,
          "kcal": 360
        }
      },
      {
        "id": 3,
        "name": "Salchichón",
        "img": "",
        "nutritionalInfo": {
          "proteins": 25,
          "carbohydrates": 2,
          "fat": 28,
          "kcal": 340
        }
      },
      {
        "id": 4,
        "name": "Lomo Embuchado",
        "img": "",
        "nutritionalInfo": {
          "proteins": 35,
          "carbohydrates": 0,
          "fat": 15,
          "kcal": 275
        }
      },
      {
        "id": 5,
        "name": "Mortadela",
        "img": "",
        "nutritionalInfo": {
          "proteins": 12,
          "carbohydrates": 3,
          "fat": 15,
          "kcal": 220
        }
      },
      {
        "id": 6,
        "name": "Salami",
        "img": "",
        "nutritionalInfo": {
          "proteins": 20,
          "carbohydrates": 1,
          "fat": 30,
          "kcal": 350
        }
      },
      {
        "id": 7,
        "name": "Jamon Cocido",
        "img": "",
        "nutritionalInfo": {
          "proteins": 18,
          "carbohydrates": 2,
          "fat": 15,
          "kcal": 200
        }
      },
      {
        "id": 8,
        "name": "Salchicha Frankfurt",
        "img": "",
        "nutritionalInfo": {
          "proteins": 12,
          "carbohydrates": 3,
          "fat": 20,
          "kcal": 250
        }
      },
      {
        "id": 9,
        "name": "Chorizo Ibérico",
        "img": "",
        "nutritionalInfo": {
          "proteins": 24,
          "carbohydrates": 0,
          "fat": 35,
          "kcal": 400
        }
      },
      {
        "id": 10,
        "name": "Morcilla",
        "img": "",
        "nutritionalInfo": {
          "proteins": 15,
          "carbohydrates": 10,
          "fat": 25,
          "kcal": 320
        }
      }
    ]
  },
  {
    id: 6,
    name: "Queso",
    img: "assets/img/categories/cheese.jpg",
    products: [
      {
        "id": 1,
        "name": "Queso Cheddar",
        "img": "",
        "nutritionalInfo": {
          "proteins": 25,
          "carbohydrates": 1.3,
          "fat": 33,
          "kcal": 402
        }
      },
      {
        "id": 2,
        "name": "Queso Gouda",
        "img": "",
        "nutritionalInfo": {
          "proteins": 24,
          "carbohydrates": 2,
          "fat": 27,
          "kcal": 356
        }
      },
      {
        "id": 3,
        "name": "Queso Azul",
        "img": "",
        "nutritionalInfo": {
          "proteins": 21,
          "carbohydrates": 2,
          "fat": 29,
          "kcal": 353
        }
      },
      {
        "id": 4,
        "name": "Queso Brie",
        "img": "",
        "nutritionalInfo": {
          "proteins": 20,
          "carbohydrates": 0.5,
          "fat": 25,
          "kcal": 334
        }
      },
      {
        "id": 5,
        "name": "Queso Parmesano",
        "img": "",
        "nutritionalInfo": {
          "proteins": 35,
          "carbohydrates": 3.2,
          "fat": 28,
          "kcal": 420
        }
      },
      {
        "id": 6,
        "name": "Queso Manchego",
        "img": "",
        "nutritionalInfo": {
          "proteins": 26,
          "carbohydrates": 0.5,
          "fat": 30,
          "kcal": 367
        }
      },
      {
        "id": 7,
        "name": "Queso Feta",
        "img": "",
        "nutritionalInfo": {
          "proteins": 14,
          "carbohydrates": 4,
          "fat": 21,
          "kcal": 264
        }
      },
      {
        "id": 8,
        "name": "Queso Ricotta",
        "img": "",
        "nutritionalInfo": {
          "proteins": 11,
          "carbohydrates": 3.4,
          "fat": 10,
          "kcal": 174
        }
      },
      {
        "id": 9,
        "name": "Queso Cottage",
        "img": "",
        "nutritionalInfo": {
          "proteins": 12,
          "carbohydrates": 3.5,
          "fat": 4,
          "kcal": 98
        }
      },
      {
        "id": 10,
        "name": "Queso Gruyere",
        "img": "",
        "nutritionalInfo": {
          "proteins": 29,
          "carbohydrates": 0.4,
          "fat": 32,
          "kcal": 413
        }
      }
    ]
  },
  {
    id: 7,
    name: "Panadería",
    img: "assets/img/categories/bakery.jpg",
    products: [
      {
        "id": 1,
        "name": "Croissant",
        "img": "",
        "nutritionalInfo": {
          "proteins": 6,
          "carbohydrates": 31,
          "fat": 20,
          "kcal": 330
        }
      },
      {
        "id": 2,
        "name": "Pan de Centeno",
        "img": "",
        "nutritionalInfo": {
          "proteins": 8,
          "carbohydrates": 46,
          "fat": 2,
          "kcal": 220
        }
      },
      {
        "id": 3,
        "name": "Magdalena",
        "img": "",
        "nutritionalInfo": {
          "proteins": 4,
          "carbohydrates": 27,
          "fat": 10,
          "kcal": 200
        }
      },
      {
        "id": 4,
        "name": "Rosquilla",
        "img": "",
        "nutritionalInfo": {
          "proteins": 3,
          "carbohydrates": 35,
          "fat": 12,
          "kcal": 250
        }
      },
      {
        "id": 5,
        "name": "Baguette",
        "img": "",
        "nutritionalInfo": {
          "proteins": 8,
          "carbohydrates": 56,
          "fat": 2,
          "kcal": 300
        }
      },
      {
        "id": 6,
        "name": "Donut",
        "img": "",
        "nutritionalInfo": {
          "proteins": 4,
          "carbohydrates": 40,
          "fat": 25,
          "kcal": 350
        }
      },
      {
        "id": 7,
        "name": "Pan de Maíz",
        "img": "",
        "nutritionalInfo": {
          "proteins": 6,
          "carbohydrates": 40,
          "fat": 5,
          "kcal": 250
        }
      },
      {
        "id": 8,
        "name": "Tarta de Manzana",
        "img": "",
        "nutritionalInfo": {
          "proteins": 3,
          "carbohydrates": 45,
          "fat": 20,
          "kcal": 280
        }
      },
      {
        "id": 9,
        "name": "Croissant de Chocolate",
        "img": "",
        "nutritionalInfo": {
          "proteins": 5,
          "carbohydrates": 35,
          "fat": 22,
          "kcal": 340
        }
      },
      {
        "id": 10,
        "name": "Ensaimada",
        "img": "",
        "nutritionalInfo": {
          "proteins": 6,
          "carbohydrates": 40,
          "fat": 18,
          "kcal": 320
        }
      }
    ]
  },
  {
    id: 8,
    name: "Especias",
    img: "assets/img/categories/spices.jpg",
    products: [
      {
        "id": 1,
        "name": "Cúrcuma",
        "img": "",
        "nutritionalInfo": {
          "proteins": 7.8,
          "carbohydrates": 67.1,
          "fat": 9.9,
          "kcal": 354
        }
      },
      {
        "id": 2,
        "name": "Pimienta Negra",
        "img": "",
        "nutritionalInfo": {
          "proteins": 10.4,
          "carbohydrates": 64.8,
          "fat": 3.3,
          "kcal": 255
        }
      },
      {
        "id": 3,
        "name": "Canela",
        "img": "",
        "nutritionalInfo": {
          "proteins": 3.9,
          "carbohydrates": 80.6,
          "fat": 1.2,
          "kcal": 261
        }
      },
      {
        "id": 4,
        "name": "Jengibre",
        "img": "",
        "nutritionalInfo": {
          "proteins": 9,
          "carbohydrates": 71.6,
          "fat": 2,
          "kcal": 335
        }
      },
      {
        "id": 5,
        "name": "Nuez Moscada",
        "img": "",
        "nutritionalInfo": {
          "proteins": 5.8,
          "carbohydrates": 49.3,
          "fat": 36.3,
          "kcal": 525
        }
      },
      {
        "id": 6,
        "name": "Pimentón",
        "img": "",
        "nutritionalInfo": {
          "proteins": 14.8,
          "carbohydrates": 56.6,
          "fat": 12,
          "kcal": 289
        }
      },
      {
        "id": 7,
        "name": "Comino",
        "img": "",
        "nutritionalInfo": {
          "proteins": 17.8,
          "carbohydrates": 44.2,
          "fat": 22.3,
          "kcal": 375
        }
      },
      {
        "id": 8,
        "name": "Orégano",
        "img": "",
        "nutritionalInfo": {
          "proteins": 9,
          "carbohydrates": 64,
          "fat": 4,
          "kcal": 306
        }
      },
      {
        "id": 9,
        "name": "Curry",
        "img": "",
        "nutritionalInfo": {
          "proteins": 0,
          "carbohydrates": 0,
          "fat": 0,
          "kcal": 0
        }
      },
      {
        "id": 10,
        "name": "Estragón",
        "img": "",
        "nutritionalInfo": {
          "proteins": 0,
          "carbohydrates": 0,
          "fat": 0,
          "kcal": 0
        }
      }
    ]
  }
]
