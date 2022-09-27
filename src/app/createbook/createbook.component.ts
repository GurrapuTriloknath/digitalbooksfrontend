import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import Book from '../entity/book';

@Component({
  selector: 'app-digitalbook',
  templateUrl: './createbook.component.html',
  styleUrls: ['./createbook.component.scss']
})
export class CreatebookComponent implements OnInit{
  title:string='';
  author:string='';
  category:string='';
  price:any='';
  publisher:string='';
  publisheddate:any='';
  book:Book = new Book(this.title,this.author,this.category,this.price,this.publisher,this.publisheddate)

  constructor(public bookService:BookService, private route:Router) { }
  ngOnInit(): void {
  }

save(){
  console.log ('clicked');
  if(this.book.price>0){
  const observable = this.bookService.saveUser(this.book);
  observable.subscribe((response)=>{ 
    console.log(response);
    this.route.navigateByUrl('/bookslist');
  })
}else{
  alert('Price should be greater than 1')
}
}

}
