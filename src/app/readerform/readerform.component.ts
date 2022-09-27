import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-readerform',
  templateUrl: './readerform.component.html',
  styleUrls: ['./readerform.component.scss']
})
export class ReaderformComponent implements OnInit {
username:any;
email:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  this.username=localStorage.getItem('username');
  this.email = localStorage.getItem('email')
  this.buybooks()
  }
  buybooks(){
    const data={
      username: this.username
    }
    this.http.post('http://localhost:8099/books/readers/'+this.email+'/books',data, { responseType: 'text' }).subscribe(res=>{
      console.log(res);
      
    })
  }
}
