let myLibrary = [
    {
        title: "The Hobbit",
        author: "JRR Tolkein",
        pages: 573,
        read: false
    },
    {
        title: "Dune",
        author: "Frank Herbert",
        pages: 648,
        read: true
    }
];

const library = document.getElementById('library');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    event.preventDefault();
    let newBookTitle = document.getElementById('title').value;
    let newBookAuthor = document.getElementById('author').value;
    let newBookPages = document.getElementById('pages').value;
    let newBookRead = document.getElementById('read').checked;
    myLibrary.push(new Book(newBookTitle, newBookAuthor, newBookPages, newBookRead))
    console.log(myLibrary);
    refreshLibrary();
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('pages').value = ''
    document.getElementById('read').value = ''
}

function removeBook(target) {
    target.addEventListener('click', () => {
        let bookNumber = target.parentElement.getAttribute('data-id');
        myLibrary.splice(bookNumber,1)
        target.parentElement.remove();
        console.log(myLibrary);
    })
}

function refreshLibrary() {
    library.innerHTML = '';
    for (i in myLibrary) {
        const card = document.createElement('div');
        const closeIcon = document.createElement('div');
        const readCheckbox = document.createElement('input');
        readCheckbox.setAttribute("type","checkbox");
        if (myLibrary[i].read) {
            readCheckbox.checked = true;
        }
        changeReadStatus(readCheckbox);
        closeIcon.innerText = "X";
        closeIcon.className = "closeIcon"
        removeBook(closeIcon);
        card.className = "card";
        card.innerHTML = myLibrary[i].title;
        card.appendChild(closeIcon);
        card.setAttribute('data-id',`${i}`)
        card.appendChild(readCheckbox);
        library.appendChild(card);
    }
}

function changeReadStatus(target) {
    target.addEventListener('click', ()=>{
        let readCheckbox = target.checked;
        let bookNumber = target.parentElement.getAttribute('data-id');
        myLibrary[bookNumber].read = readCheckbox
        console.log(myLibrary);
    });
}

refreshLibrary();