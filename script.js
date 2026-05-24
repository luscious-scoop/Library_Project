const dialogOpenBtn = document.querySelector("#dialog-open-btn");
const dialog = document.querySelector("dialog");
const titleInput = document.querySelector("#title-input");
const authorInput = document.querySelector("#author-input");
const pagesInput = document.querySelector("#pages-input");
const saveBtn = document.querySelector("#save-btn");
const cancelBtn = document.querySelector("#cancel-btn");
const statusBtn = document.querySelector("#status-btn");
const removeBtn = document.querySelector("#remove-btn");
const checkInput = document.querySelector("#check-input");
const myForm = document.querySelector("form");

dialogOpenBtn.addEventListener("click", () => {
	dialog.showModal();
});

let library = [];

function Book(title, author, pages, status) {
	this.id = crypto.randomUUID();
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.status = status;
}

function addBookToLibrary() {
	let title = titleInput.value;
	let author = authorInput.value;
	let pages = pagesInput.value;
	let status = checkInput.checked ? "read" : "not read";
	let flag = false;
	for (let i = 0; i < library.length; i++) {
		if (title === library[i].title) {
			flag = true;
		} else {
			flag = false;
		}
	}
	if (flag === true) {
		alert("this book already exists");
	} else {
		if (title === "" || author === "" || pages === "") {
			alert("fields cannot be empty");
		} else {
			let newBook = new Book(title, author, pages, status);
			library.push(newBook);
			dialog.close();
			console.log(library);
			myForm.reset();
		}
	}
}

saveBtn.addEventListener("click", (e) => {
	e.preventDefault();
	addBookToLibrary();
});

function displayBooks() {}

cancelBtn.addEventListener("click", () => {
	dialog.close();
	myForm.reset();
});
