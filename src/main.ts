import { setupModal, toggleBurger } from "./modal";
import { Library } from "./library";

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
list.addBook("Bleach vol. 1", "Tite Kubo", "Manga", true);
list.addBook("Post Office", "Charles Bukowski", "Fiction", false);

function deleteBook() {
  console.log("Working");
}
