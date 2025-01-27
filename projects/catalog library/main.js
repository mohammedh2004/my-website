let btnadd = document.getElementById("add");
let btncheckOut = document.getElementById("check-out");
let btncheckIn = document.getElementById("check-in");
let btnlistBook = document.getElementById("list");
let back = document.getElementById("back");
let mainAddBook = document.querySelector(".mainAddBook");
let mainCheckOut = document.querySelector(".check-out");
let mainCheckIN = document.querySelector(".check-in");
let mainListBook = document.querySelector(".mainListbook");
let ISBN = document.getElementById("ISBN");
let title = document.getElementById("title");
let author = document.getElementById("author");
let creatBook = document.getElementById("creatBook");
let main = document.querySelector(".main");
let listBook = document.querySelector("#listBook");
let checkOut = document.getElementById("btncheckout");
let checkIn = document.getElementById("btncheckin");

let books;
if (localStorage.book != null) {
  books = JSON.parse(localStorage.getItem("book"));
  console.log("no");
} else {
  books = [];
  console.log("yes");
}
btnadd.onclick = function () {
  mainAddBook.style.display = "flex";
  main.style.display = "none";
  back.style.display = "inline";
};
btncheckOut.onclick = function () {
  mainCheckOut.style.display = "flex";
  main.style.display = "none";
  back.style.display = "inline";
};
btncheckIn.onclick = function () {
  mainCheckIN.style.display = "flex";
  main.style.display = "none";
  back.style.display = "inline";
};
btnlistBook.onclick = function () {
  mainListBook.style.display = "block";
  main.style.display = "none";
  back.style.display = "inline";
  showBooks();
};
back.onclick = function () {
  mainAddBook.style.display = "none";
  mainCheckIN.style.display = "none";
  mainCheckOut.style.display = "none";
  mainListBook.style.display = "none";
  back.style.display = "none";
  main.style.display = "flex";
};
creatBook.onclick = function () {
  newBook = {
    ISBN: ISBN.value,
    title: title.value,
    author: author.value,
    available: true,
  };
  books.push(newBook);
  localStorage.setItem("book", JSON.stringify(books));

  mainListBook.style.display = "block";
  mainAddBook.style.display = "none";
  back.style.display = "inline";
  showBooks();
  ISBN.value = ''
  title.value = ''
  author.value = ''
};
function showBooks() {
  let contens = `<tr>
  <th>ISBN</th>
  <th>Title</th>
  <th>Author</th>
  <th>Available</th>
  </tr>`
  books.forEach(book => {
    let isAvailable = "";
    if (book.available == true) {
      isAvailable = "Available";

    } else if (book.available == false) {
      isAvailable = "Unavailable";

    }


    contens += `

<tbody>
<td>${book.ISBN}</td>
<td>${book.title}</td>
<td>${book.author}</td>
<td id='${isAvailable}'>${isAvailable}</td>
</tbody>`;
    listBook.innerHTML = contens


  });

}

checkOut.onclick = function () {
  let ID;
  let ishere;
  for (let i = 0; i < books.length; i++) {
    ID = i
    if (document.getElementById("inpcheckout").value == books[i].ISBN) {
      ishere = books[i];


    }
  };


  if (ishere != null) {
    if (ishere.available == true) {
      books[ID].available = false
      localStorage.setItem("book", JSON.stringify(books));
      prompt(`The book with ${ishere.ISBN} ISBN is checked out!`);
    }
    else {
      prompt(`This book is aleardy checked out!`)
    }
  } else {
    prompt(`This book is not in our library!`);
  }
};
checkIn.onclick = function () {
  let ID;
  let isNothere;
  for (let i = 0; i < books.length; i++) {
    ID = i
    if (document.getElementById("inpcheckin").value == books[i].ISBN) {
      isNothere = books[i];


    }
  };
  if (isNothere != null) {
    if (isNothere.available == false) {
      books[ID].available = true
      localStorage.setItem("book", JSON.stringify(books));
      prompt(`The book with ${isNothere.ISBN} ISBN is checked in!`);
    }
    else {
      prompt(`This book is aleardy checked in!`)
    }
  } else {
    prompt(`This book is not in our library!`);
  }
};
