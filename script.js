const dialogOpenBtn = document.querySelector("#dialog-open-btn");
const dialog = document.querySelector("dialog");
const titleInput = document.querySelector("#title-input");
const authorInput = document.querySelector("#author-input");
const pagesInput = document.querySelector("#number-input");
const saveBtn = document.querySelector("#save-btn");
const cancelBtn = document.querySelector("#cancel-btn");
const statusBtn = document.querySelector("#status-btn");
const removeBtn = document.querySelector("#remove-btn");

dialogOpenBtn.addEventListener("click", () => {
	dialog.showModal();
});

let library = [];

function Book() {}

function addBookToLibrary() {}
