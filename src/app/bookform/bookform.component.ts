import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import Book from '../entity/book';

@Component({
  selector: 'app-bookform',
  templateUrl: './bookform.component.html',
  styleUrls: ['./bookform.component.scss']
})
export class BookformComponent implements OnInit{
  title:string='';
  author:string='';
  category:string='';
  price:number=1;
  publisher:string='';
  publisheddate:any='';
  book:Book = new Book(this.title,this.author,this.category,this.price,this.publisher,this.publisheddate)
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
