import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import {InfoComponent} from "./components/info/info.component";
import { BooksListComponent } from './components/books-list/books-list.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'info', component: InfoComponent},
  { path: 'books', component: BooksListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
