import { Component, signal } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  template: `
    <div class='bg-green-400 px-4 py-3 shadow-md flex justify-between items-center'>
      <span>My Store</span>
      <app-primary-button label="Cart" (btnClicked)="showButtonClicked()"/>
</div>
  `,
  styles: `
  `
})
export class HeaderComponent {
  showButtonClicked(){
    console.log("Button Clicked!")
  }
}
