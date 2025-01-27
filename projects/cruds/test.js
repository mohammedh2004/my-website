let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let submit = document.getElementById("submit");
let category = document.getElementById("category");
let count = document.getElementById("count");
let deleteAll = document.getElementById("delete-all");
let searchField = document.getElementById("search");
let searchTitle = document.getElementById("searchTitle");
let searchCategory = document.getElementById("searchCategory");
let tbody = document.getElementById("tbody");
let ID = 0;
let mood = "creat";
function getTotal() {
  if (price.value != "") {
    total.innerHTML =
      +price.value + +taxes.value + +ads.value - +discount.value;
    total.style.backgroundColor = "red";
  } else {
    total.style.backgroundColor = "#040";
    total.innerText = "";
  }
}
let products;
if (localStorage.product != null) {
  products = JSON.parse(localStorage.getItem("product"));
} else {
  products = [];
}
submit.onclick = function () {
  if (mood == "creat") {
    let newpro = {
      title: title.value,
      price: price.value,
      taxes: taxes.value,
      ads: ads.value,
      discount: ads.value,
      total: total.innerHTML,
      category: category.value,
    };

    if (count.value > 1) {
      for (let i = 0; i < count.value; i++) products.push(newpro);
    } else {
      products.push(newpro);
    }

    localStorage.setItem("product", JSON.stringify(products));
    clearData();
    showData();
  } else {
    products[ID].title = title.value;
    products[ID].price = price.value;
    products[ID].ads = ads.value;
    products[ID].taxes = taxes.value;
    products[ID].discount = discount.value;
    products[ID].category = category.value;

    localStorage.setItem("product", JSON.stringify(products));
    mood = "creat";
    submit.innerHTML = "Creat";
    count.style.display = "block";
    clearData();
    showData();
  }
};
function clearData() {
  title.value = "";
  price.value = "";
  ads.value = "";
  taxes.value = "";
  discount.value = "";
  total.innerHTML = "";
  count.value = "";
  category.value = "";
  total.style.backgroundColor = "#040";
}

function showData() {
  let table = "";
  for (let i = 0; i < products.length; i++) {
    table += `
        <td>${i}</td>
        <td>${products[i].title}</td>
        <td>${products[i].price}</td>
        <td>${products[i].taxes}</td>
        <td>${products[i].ads}</td>
        <td>${products[i].discount}</td>
        <td>${products[i].total}</td>
        <td>${products[i].category}</td>
        <td><button onclick="uptate(${i})" id="uptate">uptate</button></td>
        <td><button onclick="deleteItem(${i})"  id="delete">delete</button></td>
        </tr>`;
  }

  tbody.innerHTML = table;
  showDeleteAll();
}
showData();
showDeleteAll();
function deleteItem(id) {
  products.splice(id, 1);
  localStorage.clear();
  localStorage.setItem("product", JSON.stringify(products));
  showData();
}
function showDeleteAll() {
  if (products.length == 0) {
    deleteAll.style.display = "none";
  } else {
    deleteAll.style.display = "block";
  }
}
deleteAll.onclick = function () {
  products = [];
  localStorage.clear();
  showData();
};
function uptate(id) {
  ID = id;
  mood = "uptate";
  submit.innerHTML = "Uptate";
  count.style.display = "none";
  title.value = products[id].title;
  price.value = products[id].price;
  ads.value = products[id].ads;
  taxes.value = products[id].taxes;
  discount.value = products[id].discount;
  total.innerHTML = products[id].total;
  total.style.backgroundColor = "red";
  category.value = products[id].category;
  scroll({
    top: 0,
    behavior: "smooth",
  });
}
let searchMood = "searchByTitle";
searchCategory.onclick = function () {
  searchField.focus();
  searchMood = "searchByCategory";
  searchField.placeholder = "Search by category";
};
searchTitle.onclick = function () {
  searchField.focus();
  searchMood = "searchByTitle";
  searchField.placeholder = "Search by title";
};

function search() {
  tbody.innerHTML = "";
  if (searchField.value != "") {
    if (searchMood == "searchByTitle") {
      for (let i = 0; i < products.length; i++) {
        if (products[i].title.includes(searchField.value)) {
          tbody.innerHTML += `
<td>${i}</td>
<td>${products[i].title}</td>
<td>${products[i].price}</td>
<td>${products[i].taxes}</td>
<td>${products[i].ads}</td>
<td>${products[i].discount}</td>
<td>${products[i].total}</td>
<td>${products[i].category}</td>
<td><button onclick="uptate(${i})" id="uptate">uptate</button></td>
<td><button onclick="deleteItem(${i})"  id="delete">delete</button></td>
</tr>`;
        }
      }
    } else {
      for (let i = 0; i < products.length; i++) {
        if (products[i].category.includes(searchField.value)) {
          tbody.innerHTML += `
  <td>${i}</td>
  <td>${products[i].title}</td>
  <td>${products[i].price}</td>
  <td>${products[i].taxes}</td>
  <td>${products[i].ads}</td>
  <td>${products[i].discount}</td>
  <td>${products[i].total}</td>
  <td>${products[i].category}</td>
  <td><button onclick="uptate(${i})" id="uptate">uptate</button></td>
  <td><button onclick="deleteItem(${i})"  id="delete">delete</button></td>
  </tr>`;
        }
      }
    }
  } else {
    showData();
  }
}
