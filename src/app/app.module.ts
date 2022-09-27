import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { CreatebookComponent } from './createbook/createbook.component';
import { BookslistComponent } from './bookslist/bookslist.component';
import { BookformComponent } from './bookform/bookform.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ReaderbookslistComponent } from './readerbookslist/readerbookslist.component';
import { ReaderformComponent } from './readerform/readerform.component';
import { AuthorHomeComponent } from './author-home/author-home.component';



const routes: Routes = [
  { path:'bookform', component: BookformComponent },
  { path:'createbook', component: CreatebookComponent},
  { path:'bookslist', component: BookslistComponent},
 
]

@NgModule({
  declarations: [
    AppComponent,
    BookformComponent,
    CreatebookComponent,
    BookslistComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    ReaderbookslistComponent,
    ReaderformComponent,
    AuthorHomeComponent
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
