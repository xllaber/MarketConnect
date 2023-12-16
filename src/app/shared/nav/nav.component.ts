import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  img: string = "assets/img/logo_min.png"
  iconColor:string = getComputedStyle(document.documentElement).getPropertyValue("--alternative-4");

}
