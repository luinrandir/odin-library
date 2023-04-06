import { setupModal } from "./modal";
console.log("Test");
setupModal(document.querySelector<HTMLButtonElement>("#about-btn"),document.querySelector("#about-modal"),"open");
