import { BookPayload } from './../interfaces/book';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private booksUrl = '/api/books'
  private booksData: Book[] = []
  private books$ = new BehaviorSubject<Book[]>([])

  constructor(private http: HttpClient) { }

  get books() {
    console.log('this.booksData', this.booksData)
    if(this.booksData.length === 0) {
      this.fetchBooks()
    }
    return this.books$.asObservable()
  }

  fetchBooks() {
    return this.http.get<Book[]>(this.booksUrl)
                    .subscribe((data) => {
                      this.booksData = data;
                      console.log(this.booksData)
                      this.books$.next(data)
                    })
  }

  // addBook(payload: { title: string, author: string}) {
    addBook(payload: BookPayload) {
    return this.http.post<Book>(this.booksUrl, payload)
                    .subscribe((data) => {
                      console.log(data)
                      this.booksData.push(data)
                      this.books$.next([...this.booksData])
                    })
  }

  updateBook(book: Book) {
    return this.http.put<Book>(`${this.booksUrl}/${book.id}`, book)
                    .subscribe((data) => {
                        const updatedBooks = this.booksData.map(book => book.id === data.id ? data : book)
                        this.booksData = updatedBooks
                        this.books$.next([...updatedBooks])
                    })
  }

  deleteBook(id: number) {
    return this.http.delete(`${this.booksUrl}/${id}`)
                    .subscribe(() => {
                      const updatedBooks = this.booksData.filter(book => book.id !== id)
                      this.booksData = updatedBooks
                      this.books$.next([...this.booksData])
                    })
  }
}
