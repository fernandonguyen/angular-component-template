import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-component-template';
  cardName = 'Profession Dev';
  email = 'test@gmail.com';
  phone  = '012345678';
}
