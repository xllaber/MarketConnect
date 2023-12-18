import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menuBanner: string = "assets/img/kitchen.png";

  constructor(private router: Router) {
  }

  showMenu(id: number){
    this.router.navigate(["menu/", id])
  }
}
