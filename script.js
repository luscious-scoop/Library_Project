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
const cardsContainer = document.querySelector(".cards-container");

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
	let statusBook = checkInput.checked ? "Read" : "Not read";
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
			let newBook = new Book(title, author, pages, statusBook);
			library.push(newBook);
			dialog.close();
			console.log(library);
			myForm.reset();
			renderCards();
		}
	}
}

saveBtn.addEventListener("click", (e) => {
	e.preventDefault();
	addBookToLibrary();
});

cancelBtn.addEventListener("click", () => {
	dialog.close();
	myForm.reset();
});

function renderCards(array = library) {
	if (array.length === 0) {
		return;
	}
	cardsContainer.textContent = "";
	for (let i = 0; i < array.length; i++) {
		let card = document.createElement("div");
		card.classList.add("card");
		let titleSection = document.createElement("div");
		titleSection.classList.add("title");
		let heading = document.createElement("h2");
		let paragraph = document.createElement("p");
		heading.textContent = "Title";
		paragraph.textContent = library[i].title;
		titleSection.appendChild(heading);
		titleSection.appendChild(paragraph);
		card.appendChild(titleSection);

		let authorSection = document.createElement("div");
		authorSection.classList.add("author");
		let heading2 = document.createElement("h2");
		let paragraph2 = document.createElement("p");
		heading2.textContent = "Author";
		paragraph2.textContent = library[i].author;
		authorSection.appendChild(heading2);
		authorSection.appendChild(paragraph2);
		card.appendChild(authorSection);

		let pagesSection = document.createElement("div");
		pagesSection.classList.add("pages");
		let heading3 = document.createElement("h2");
		let paragraph3 = document.createElement("p");
		heading3.textContent = "Pages read";
		paragraph3.textContent = library[i].pages;
		pagesSection.appendChild(heading3);
		pagesSection.appendChild(paragraph3);
		card.appendChild(pagesSection);

		let buttonSection = document.createElement("div");
		buttonSection.classList.add("card-button");
		let button1 = document.createElement("button");
		button1.classList.add("status-btns");
		button1.textContent = library[i].status;
		let button1Class =
			button1.textContent === "Read" ? "status-btn" : "status-not-read";
		button1.classList.add(button1Class);

		let button2 = document.createElement("button");
		button2.textContent = "Remove";
		button2.classList.add("remove-btn");
		button2.setAttribute("data-id", `${library[i].id}`);
		buttonSection.appendChild(button1);
		buttonSection.appendChild(button2);
		card.appendChild(buttonSection);

		cardsContainer.appendChild(card);
	}
	console.log(library);
	removeCardEvent();
	statusEvent();
}

function removeCards(id) {
	let flag = false;
	let index = -1;

	for (let i = 0; i < library.length; i++) {
		if (library[i].id === id) {
			flag = true;
			index = i;
			break;
		} else {
			flag = false;
		}
	}
	if (flag && index !== -1) {
		library.splice(index, 1);
		let removeCard = document.querySelector(`[data-id="${id}"]`)
			.parentElement.parentElement;
		cardsContainer.removeChild(removeCard);
	}
}
function removeCardEvent() {
	document.querySelectorAll(".remove-btn").forEach((button) => {
		button.addEventListener("click", () => {
			removeCards(button.dataset.id);
		});
	});
}

function statusEvent() {
	const statusBtns = document.querySelectorAll(".status-btns");
	statusBtns.forEach((button) => {
		button.addEventListener("click", () => {
			if (button.textContent === "Read") {
				button.textContent = "Not read";
				button.classList.add("status-not-read");
				button.classList.remove("status-btn");
			} else {
				button.textContent = "Read";
				button.classList.add("status-btn");
				button.classList.remove("status-not-read");
			}
		});
	});
}
