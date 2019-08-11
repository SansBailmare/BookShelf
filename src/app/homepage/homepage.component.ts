import { Component, OnInit } from '@angular/core';
import { slideInOut } from '../animations';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  animations: [slideInOut]
})
export class HomepageComponent implements OnInit {

  constructor() { }
  visible(){
    document.getElementById('deck').className="notvisible";
  }
  ngOnInit() {
  }

}
