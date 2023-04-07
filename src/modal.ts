export function setupModal(
    openButton: HTMLButtonElement | null,
    closeButton: HTMLButtonElement | null,
    modal: HTMLDialogElement | null
) {
    if (openButton === null || closeButton === null || modal === null) return;
    openButton.addEventListener("click", () => modal.showModal());
    closeButton.addEventListener("click", () => modal.close());
}
