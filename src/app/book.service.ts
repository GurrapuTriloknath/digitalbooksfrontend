import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Book from './entity/book';
const API_URL = 'http://localhost:8099/books/';
const API_Signup = 'http://localhost:8099/api/auth/signup';
const API_Signin = 'http://localhost:8099/api/auth/signin';
@Injectable({
  providedIn: 'root',
})
export class BookService {
  signin(data: any) {
    return this.client.post(API_Signin, data);
  }
  http: any;
  signup(data: any) {
    return this.client.post(API_Signup, data);
  }

  constructor(public client: HttpClient) {}
  //DeleteUser
  deleteBook(id: number) {
    return this.client.delete(API_URL + id);
  }
  //ngonit method
  getBooks() {
    return this.client.get(API_URL);
  }
  saveUser(book: Book) {
    return this.client.post(API_URL, book);
  }
}
