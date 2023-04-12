import { Book } from "./types/book";

const rowStyling: string[] = [
  "odd:bg-slate-50",
  "even:bg-indigo-100",
  "odd:hover:bg-slate-200",
  "even:hover:bg-indigo-200",
  "peer-checked:text-red-500",
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

export let addRow = (body: HTMLTableSectionElement, book: Book) => {
  let newRow = body.insertRow();
  newRow.classList.add(...rowStyling);
  newRow.innerHTML = `
      <td class="${cellStyling.join(" ")}">${book.title}</td>
      <td class="${cellStyling.join(" ")}">${book.author}</td>
      <td class="${cellStyling.join(" ")}">${book.genre}</td>
      <td class="${cellStyling.join(" ")}">${
    book.read ? "Read" : "Not Read"
  }</td>
      <td class="${cellStyling.join(" ")}">
        <button class="${buttonStyling.join(" ")}">
          Remove
        </button>
      </td>`;
};
