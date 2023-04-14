import { Book } from "./types/book";
import booksJson from "./booklist.json";

const rowStyling: string[] = [
  "odd:bg-slate-50",
  "even:bg-indigo-100",
  "odd:hover:bg-slate-200",
  "even:hover:bg-indigo-200",
];
const checkStyling: string[] = [
  "rounded-full",
  "text-green-600",
  "w-5",
  "h-5",
  "focus:border-green-600",
  "focus:ring",
  "focus:ring-green-600",
];
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
    this._list = JSON.parse(localStorage.getItem("books") || "[]");
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
    this.updateDatabase();
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
      <td class="${book.read ? "read" : ""} p-2">${book.title}</td>
      <td class="p-2">${book.author}</td>
      <td class="p-2">${book.genre}</td>
      <td class="pl-4 p-2"><input type="checkbox" data-checked=${key} class="${checkStyling.join(
      " "
    )}" ${book.read ? "checked" : ""}/></td>
      <td class="p-2">
        <button type="button" data-key=${key} class="delete-row ${buttonStyling.join(
      " "
    )}">Remove</button>
      </td>`;
    document
      .querySelector(`[data-checked="${key}"]`)
      ?.addEventListener("change", () => {
        document
          .querySelector(`[data-checked="${key}"]`)
          ?.toggleAttribute("checked");
        document
          .getElementById(key)
          ?.firstElementChild?.classList.toggle("read");
        this._list.map((item) => {
          if (item.title === book.title) item.read = !item.read;
        });
        this.updateDatabase();
      });
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
    localStorage.setItem("books", JSON.stringify([...this._list]));
  }
}
