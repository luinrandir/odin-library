import { setupModal, toggleBurger } from "./modal";
import { Library } from "./library";

const formInput = document.querySelector<HTMLFormElement>("#book-entry");
const bookTitle = document.querySelector<HTMLInputElement>("#title")!;
const bookAuthor = document.querySelector<HTMLInputElement>("#author")!;
const bookGenre = document.querySelector<HTMLInputElement>("#genre")!;
const bookRead = document.querySelector<HTMLInputElement>("#read")!;

setupModal(
  document.querySelector<HTMLButtonElement>("#about-btn"),
  document.querySelector<HTMLButtonElement>("#about-close"),
  document.querySelector<HTMLDialogElement>("#about-modal")
);

setupModal(
  document.querySelector<HTMLButtonElement>("#about-btn-media"),
  document.querySelector<HTMLButtonElement>("#about-close"),
  document.querySelector<HTMLDialogElement>("#about-modal")
);

setupModal(
  document.querySelector<HTMLButtonElement>("#made-btn"),
  document.querySelector<HTMLButtonElement>("#made-close"),
  document.querySelector<HTMLDialogElement>("#made-modal")
);

setupModal(
  document.querySelector<HTMLButtonElement>("#made-btn-media"),
  document.querySelector<HTMLButtonElement>("#made-close"),
  document.querySelector<HTMLDialogElement>("#made-modal")
);
toggleBurger(
  document.querySelector<HTMLDivElement>("#burger"),
  document.querySelector<HTMLElement>("#menu")
);

let list = new Library(document.querySelector<HTMLTableElement>("#list")!);

formInput?.addEventListener("submit", (e) => {
  e.preventDefault();
  list.addBook(
    bookTitle.value,
    bookAuthor.value,
    bookGenre.value,
    bookRead.value === "Read" ? true : false
  );
  formInput.reset();
});
