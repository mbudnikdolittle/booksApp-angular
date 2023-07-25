import { Subject, takeUntil } from 'rxjs';
import { Book } from 'src/app/interfaces/book';
import { BookService } from './../../services/book.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit, OnDestroy {

  constructor(private bookService: BookService) { }

  booksTitles: string[] = [];
  books: Book[] = []
  private destroy$: Subject<void> = new Subject()

  ngOnInit() {
    this.bookService.books
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.books = data
        console.log(data)
      })

  }

  addBookTitle(newBookTitle: string) {
    this.booksTitles.push(newBookTitle)
  }


  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
