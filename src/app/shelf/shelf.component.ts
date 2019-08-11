import { Component, OnInit } from '@angular/core';
import { slideInOut } from '../animations';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.css'],
  animations: [slideInOut]
})
export class ShelfComponent implements OnInit {
  searchname:string="";
  //cardLength$:number=10;
  status: boolean = false;

  CardsNumbers=[1,2,3,4,5,6,7,8,9,10];
  constructor() { }
  searchBook(){
    alert(this.searchname);
  }

  clickEvent(id:number){
    this.status = !this.status;
    let element = document.getElementById('action'+id);
    if(element.style.color=="black"){
    element.style.color="red";
    element.className="fa fa-heart fa-lg";
    }
    else{
      element.style.color="black";
      element.className="far fa-heart fa-lg";
    }
    
    
    
    //alert("This is ID:"+id);    


  }
  ngOnInit() {
  }

}
