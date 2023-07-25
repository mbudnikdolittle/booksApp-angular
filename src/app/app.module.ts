import { RetryInterceptor } from './interceptors/retry.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { BookComponent } from './components/book/book.component';
import {HeaderComponent} from "./shared/header/header.component";
import { BooksListComponent } from './components/books-list/books-list.component';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { AddBookComponent } from './components/add-book/add-book.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { LoaderInterceptor } from './interceptors/loader.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    BookComponent,
    HeaderComponent,
    BooksListComponent,
    AddBookComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: RetryInterceptor,
    multi: true
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
