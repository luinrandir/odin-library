import { setupModal } from "./modal";
setupModal(
    document.querySelector<HTMLButtonElement>("#about-btn"),
    document.querySelector<HTMLButtonElement>("#about-close"),
    document.querySelector<HTMLDialogElement>("#about-modal")
);
