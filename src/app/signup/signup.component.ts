import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    role: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

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
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        role:['',Validators.required]
      },
    );
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
console.log(this.form.value);

    this.bookService.signup(this.form.value).subscribe(
      data => {
this.router.navigateByUrl('/signin')
      },
      err => {
      }
    );
  }
}
