import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { BigCardComponent } from './app/big-card/big-card.component';
import { SmallCardComponent } from './app/small-card/small-card.component';
import { MenuComponent } from './app/menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  `,
  imports: [
    BigCardComponent,
    SmallCardComponent,
    MenuComponent
  ]
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
