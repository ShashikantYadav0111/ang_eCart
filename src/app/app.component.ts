import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';
import { ProductListComponent } from "./pages/product-list/product-list.component";

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  template: `<app-header/>
    <router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-ecom';
}
