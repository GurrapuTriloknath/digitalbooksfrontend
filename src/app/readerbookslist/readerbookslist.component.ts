import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-readerbookslist',
  templateUrl: './readerbookslist.component.html',
  styleUrls: ['./readerbookslist.component.scss'],
})
export class ReaderbookslistComponent implements OnInit {
  books: any = [];
  username:any;
  signin:any;
  email:any;
  id:any;
  constructor(public bookService: BookService, private http: HttpClient) {}
  ngOnInit(): void {
    
    this.username = localStorage.getItem('username');
    this.signin = localStorage.getItem('signin');
    this.email = localStorage.getItem('email');
    this.getBooks();
  }
  getBooks() {
    const observable = this.bookService.getBooks();
    observable.subscribe((books) => {
      this.books = books;
      console.log(this.books);
    });
  }
  buybook() {

    const data = {
      bookId: this.id,
      username: this.username,
      useremail: this.email,
    };
    console.log(data);
    
    this.http
      .post('http://localhost:8099/books/buy', data, { responseType: 'text' })
      .subscribe(
        (resp) => {
          console.log(data);
          alert('Buyed Successfully');
          console.log(resp);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  getID(event:Event,id:any){
    this.id = id;
    console.log(this.id);
    this.buybook()
  }
}
