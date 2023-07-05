import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }

  getBook(bookId: number): Observable<any> {
    return this.http.get(this.url + 'book/' + bookId);
  }

  createBook(bookData: any): Observable<any> {
    return this.http.post(this.url + 'book/createBook', bookData);
  }

  searchByClasificacion(clasificacion: string): Observable<any> {
    return this.http.get(this.url + 'book/search/'+ clasificacion);
  }

  deleteBook(bookId: number): Observable<any> {
    return this.http.delete(this.url + 'book/' + bookId);
  }
}
