import { Component } from '@angular/core';
import {provideRouter, Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  constructor(private router: Router) {
  }

  logout() {
    localStorage.removeItem('uid');
    this.router.navigate(['']);
  }
}
