import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')});
response:any;
    constructor(private bookService: BookService,public router:Router ,private formBuilder:FormBuilder) { 
      this.form = this.formBuilder.group(
        {
          username: [
            '',
            [
              Validators.required,
              Validators.minLength(6),
              Validators.maxLength(20)
            ]
          ],
          password: [
            '',
            [
              Validators.required,
              Validators.minLength(6),
              Validators.maxLength(40)
            ]
          ],
        },
      );
    }
 
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  ngOnInit(): void {
  }
  onSubmit(): void {
    console.log(this.form.value);
    
        this.bookService.signin(this.form.value).subscribe(
          data => {
            console.log(data)
            this.response=data;
            localStorage.setItem('email',this.response.email);
            localStorage.setItem('username',this.response.username);
            localStorage.setItem('signin','true')
            console.log(this.response.roles);
            
    if(this.response.roles[0] =="READER"){
      this.router.navigateByUrl('/buybook')
    } else{
      this.router.navigateByUrl('/author-home')
    }


    console.log(data)
          },
          err => {
          }
        );
      }
    }
