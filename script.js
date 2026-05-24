const dialogOpenBtn = document.querySelector("#dialog-open-btn");
const dialog = document.querySelector("dialog");

dialogOpenBtn.addEventListener("click", () => {
	dialog.showModal();
});
