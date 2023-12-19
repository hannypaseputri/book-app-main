import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { BooksService } from '../books.service';
@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  books: any
  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    return this.bookService.showBook().subscribe((data: {}) => {
      this.books = data;
    })
  }

}
