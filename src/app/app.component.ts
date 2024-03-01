import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DataBindingInAngular';
  name = 'Angular';
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
  isDisabled = false;
  isChecked=false;

  clickMe() {
    console.log('Button Clicked');
    alert('Button Clicked');
  }

  enableButton() {
    this.isDisabled = false;
  }

  Checked() {
    this.isDisabled = true;
  }
}
