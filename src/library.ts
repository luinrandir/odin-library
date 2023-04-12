import { Book } from "./types/book";
import booksJson from "./booklist.json";
import { addRow } from "./add-row";

export class Library {
  private _list: Book[];

  constructor() {
    this._list = booksJson.books;
  }

  render(table: HTMLTableElement | null) {
    if (table === null) return;
    this._list.forEach((book) => {
      addRow(table.getElementsByTagName("tbody")[0], book);
    });
  }
}
