import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-bookslist',
  templateUrl: './bookslist.component.html',
  styleUrls: ['./bookslist.component.scss']
})
export class BookslistComponent implements OnInit {
  books:any =[];
  constructor(public bookService:BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }
  getBooks() {
    const observable = this.bookService.getBooks();
    observable.subscribe(books => {
      this.books = books;
    })
  
  }
   //DeleteUser
   deleteBook(id: number){
     const observable=this.bookService.deleteBook(id);
     observable.subscribe(response => {
       this.getBooks();
     })
   }
}







