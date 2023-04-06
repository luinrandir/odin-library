export function setupModal(
  button: HTMLButtonElement | null,
  modal: HTMLDialogElement | null,
  type: "open" | "close"
) {
  if (button === null || modal === null) return;
  type === "open"
    ? button.addEventListener("click", () => modal.showModal())
    : button.addEventListener("click", () => modal.close());
}
