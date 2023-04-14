import { setupModal, toggleBurger } from "./modal";
import { Library } from "./library";

// Theme
const themeSelector = document.querySelector<HTMLSpanElement>("#theme")!;
const gitLink = document.querySelector<HTMLPictureElement>("picture")!;

if (
  localStorage.getItem("theme") === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  gitLink.querySelector("source")!.media = "all";
  document.documentElement.classList.add("dark");
  themeSelector.innerText = "light_mode";
  localStorage.setItem("theme", "dark");
} else {
  gitLink.querySelector("source")!.media = "none";
  document.documentElement.classList.remove("dark");
  themeSelector.innerText = "dark_mode";
  localStorage.setItem("theme", "light");
}

themeSelector.addEventListener("click", () => {
  if (themeSelector.innerText === "dark_mode") {
    gitLink.querySelector("source")!.media = "all";
    document.documentElement.classList.add("dark");
    themeSelector.innerText = "light_mode";
    localStorage.setItem("theme", "dark");
  } else {
    gitLink.querySelector("source")!.media = "none";
    document.documentElement.classList.remove("dark");
    themeSelector.innerText = "dark_mode";
    localStorage.setItem("theme", "light");
  }
});

// Modals
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

// Main functionality
const formInput = document.querySelector<HTMLFormElement>("#book-entry");
const bookTitle = document.querySelector<HTMLInputElement>("#title")!;
const bookAuthor = document.querySelector<HTMLInputElement>("#author")!;
const bookGenre = document.querySelector<HTMLInputElement>("#genre")!;
const bookRead = document.querySelector<HTMLInputElement>("#read")!;
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
