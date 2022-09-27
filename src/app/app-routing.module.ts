// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorHomeComponent } from './author-home/author-home.component';

import { BookformComponent } from './bookform/bookform.component';
import { BookslistComponent } from './bookslist/bookslist.component';
import { CreatebookComponent } from './createbook/createbook.component';
import { HomeComponent } from './home/home.component';
import { ReaderbookslistComponent } from './readerbookslist/readerbookslist.component';
import { ReaderformComponent } from './readerform/readerform.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
  
  { path:'createbook', component: CreatebookComponent },
  {
    path:'',redirectTo:'/home' , pathMatch:'full'
  },
  { path:'createbook', component: CreatebookComponent},
  { path:'bookslist', component: BookslistComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeComponent},
  {path:'bookform',component: BookformComponent},
  {path:'buybook',component: ReaderbookslistComponent},
  {path:'readerform',component:ReaderformComponent},
{path:'author-home', component:AuthorHomeComponent}
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }2