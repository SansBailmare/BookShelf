import { Component } from '@angular/core';
import { slideInOut } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInOut]
})
export class AppComponent {
  title = 'books';
}
