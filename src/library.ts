import { Book } from "./types/book";
import booksJson from "./booklist.json";

const rowStyling: string[] = [
  "odd:bg-slate-50",
  "even:bg-indigo-100",
  "odd:hover:bg-slate-200",
  "even:hover:bg-indigo-200",
];
const cellStyling: string[] = ["p-2"];
const buttonStyling: string[] = [
  "rounded-full",
  "border-2",
  "border-red-400",
  "px-3",
  "py-1",
  "font-semibold",
  "tracking-wide",
  "hover:bg-red-400",
  "hover:text-white",
];

export class Library {
  private _list: Book[];
  private _table: HTMLTableElement;

  constructor(table: HTMLTableElement) {
    this._list = booksJson.books;
    this._table = table;
    this.render();
  }
  addBook(title: string, author: string, genre: string, read: boolean) {
    this._list.push({ title, author, genre, read });
    this.addRow(
      this._table.getElementsByTagName("tbody")[0],
      {
        title,
        author,
        genre,
        read,
      },
      0
    );
  }
  private addRow(
    body: HTMLTableSectionElement,
    book: Book,
    index: number = -1
  ) {
    let newRow = body.insertRow(index);
    let key = `key-${book.title.split(" ").join("")}`;
    newRow.classList.add(...rowStyling);
    newRow.id = key;
    newRow.innerHTML = `
      <td class="${cellStyling.join(" ")}">${book.title}</td>
      <td class="${cellStyling.join(" ")}">${book.author}</td>
      <td class="${cellStyling.join(" ")}">${book.genre}</td>
      <td class="${cellStyling.join(" ")}">${
      book.read ? "Read" : "Not Read"
    }</td>
      <td class="${cellStyling.join(" ")}">
        <button type="button" data-key=${key} class="delete-row ${buttonStyling.join(
      " "
    )}">Remove</button>
      </td>`;
    document
      .querySelector(`[data-key="${key}"]`)
      ?.addEventListener("click", () => {
        document.getElementById(key)?.remove();
        this._list.splice(
          this._list.findIndex((item) => item.title === book.title),
          1
        );
        this.updateDatabase();
      });
  }

  private render() {
    if (this._table === null) return;
    this._list.forEach((book) => {
      this.addRow(this._table.getElementsByTagName("tbody")[0], book);
    });
  }
  updateDatabase() {
    console.log(this._list);
  }
}
