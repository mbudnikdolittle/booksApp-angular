import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Book } from 'src/app/interfaces/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private bookService: BookService) { }
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

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
