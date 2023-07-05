import { Component } from '@angular/core';
import { tap } from 'rxjs/operators';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  bookData: any = {};
  bookId: number = 0;
  book: any;
  deleteMessage: string = '';
  notFoundMessage: string = '';
  selectedClasificacion: string = '';
  searchResult: any = null;
  books: any[] = []; // Propiedad para almacenar los libros encontrados

  constructor(private bookService: BookService) { }

  getBookById() {
    if (this.bookId) {
      this.bookService.getBook(this.bookId).subscribe(
        data => {
          console.log('Este es el libro con ID:', this.bookId, data);
          this.book = data;
          this.notFoundMessage = ''; // Reset not found message
        },
        error => {
          console.log('Error al obtener el libro:', error);
          this.book = null;
          this.notFoundMessage = 'Este no existe mi pana'; // Set not found message
        }
      );
    }
  }

  createBook() {
    this.bookService.createBook(this.bookData).subscribe(data => {
      console.log('Libro creado:', data);
      // Puedes realizar alguna acción adicional después de crear el libro
    });
  }

  searchBooksByClasificacion() {
    if (this.selectedClasificacion) {
      this.bookService.searchByClasificacion(this.selectedClasificacion).subscribe(data => {
        console.log('Libros encontrados:', data);
        this.searchResult = data; // Guardar el resultado en searchResult
      });
    }
  }

  deleteBookById() {
    if (this.bookId) {
      this.bookService.deleteBook(this.bookId).pipe(
        tap(() => {
          this.deleteMessage = 'Libro eliminado con ID: ' + this.bookId;
          this.book = null;
        })
      ).subscribe();
    }
  }
}
