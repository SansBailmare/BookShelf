import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  slideInOut
} from '../animations';
import {
  Books,
  Update_FetchCategory
} from '../user';
import {
  ApiService
} from '../api.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.css'],
  animations: [slideInOut]
})
export class ShelfComponent implements OnInit {
  searchname: string = "";
  status: boolean = false;
  books: Books[];
  books1: Books[];
  selectedBooks: Books[];

  //selectedBook:  Books  = { book_id: null, book_title: null, book_author: null, book_desc: null, book_image: null, book_store: null, book_type: null, book_price: null };
  arr: Update_FetchCategory = {
      id: null,
      category: null
  };
  id:number;
  

  
  count = 0;

  CardsNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor(private apiService: ApiService, private router: Router,private authService: AuthService) {}
  searchBook() {
      //alert(this.searchname);
      this.authService.logout();
        this.router.navigateByUrl('/homepage');
  }

  clickEvent(id: number) {
      this.status = !this.status;
      let element = document.getElementById('action' + id);
      if (element.style.color == "black") {
          element.style.color = "red";
          element.className = "fa fa-heart fa-lg";
      } else {
          element.style.color = "black";
          element.className = "far fa-heart fa-lg";
      }



      //alert("This is ID:"+id);    


  }
  showSite(name:string){
    swal.fire("You can Buy this book at "+name);
  }

  showMore(desc){
    swal.fire(desc.book_title,desc.book_desc);
  }

  get_category_wise_books(category: string) {
      this.arr['id'] = this.id;
      this.arr['category'] = category;
      //alert(this.arr);
      //alert(this.arr.id +", "+ this.arr.category);
      //alert(typeof(this.arr.category));
      this.apiService.get_category_books(this.arr).subscribe((books: Books[]) => {
          this.selectedBooks = books;
          this.count = this.selectedBooks.length;
          console.log(this.books);
      })
  }
  search_books() {
      // alert(this.id);
      this.selectedBooks = []


      for (let i = 0; i < this.books.length; i++) {
          if ((this.books[i].book_title.toUpperCase().search(this.searchname.toUpperCase()) == -1) && (this.books[i].book_author.toUpperCase().search(this.searchname.toUpperCase()) == -1)) {
              continue;
          } else {
              this.selectedBooks.push(this.books[i]);
          }
      }
      //console.log(this.selectedBooks);


  }



  ngOnInit() {
      this.apiService.readBooks().subscribe((books: Books[]) => {
        this.books = books;
        this.selectedBooks = books;
        this.id=this.apiService.id;
        console.log("ASDSADSADSA"+this.apiService.id);
        if(this.apiService.interests == null){
            console.log("No interests");    
        }
        else{
            this.get_category_wise_books(this.apiService.interests)
        }
      })
     
  }

}