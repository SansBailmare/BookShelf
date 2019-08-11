import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, Books, Update_FetchCategory } from  './user';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public id: number;
  public interests:string;
  

  registerUser(user: User): Observable<User>{
    return this.httpClient.post<User>(`http://127.0.0.1:80/backend/api/registerUser.php`, user);
  }

  readUsers(): Observable<User[]>{
    
    return this.httpClient.get<User[]>('http://127.0.0.1:80/backend/api/read_users.php');
  }

  readBooks(): Observable<Books[]>{
    return this.httpClient.get<Books[]>('http://127.0.0.1:80/backend/api/read_books.php');
  }

  get_category_books(arr:Update_FetchCategory): Observable<Books[]>{
   
    return this.httpClient.post<Books[]>('http://127.0.0.1:80/backend/api/match_books.php',arr);
  }
  

  constructor(private httpClient: HttpClient) { }
}
