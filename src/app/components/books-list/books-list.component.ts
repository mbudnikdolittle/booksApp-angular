import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  constructor(private http: HttpClient) { }

  booksTitles: string[] = [];

  ngOnInit() {
    this.getBooks()
  }

  getBooks() {
    this.http.get('/api/books-list').subscribe(data => console.log(data))
  }

  addBookTitle(newBookTitle: string) {
    this.booksTitles.push(newBookTitle)
  }

}
