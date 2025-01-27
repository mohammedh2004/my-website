let inpfield = document.getElementById("inpfield");
let add = document.getElementById("add");
let Delete = document.getElementById("delete");
let box = document.getElementById("box");
function update() {
  if (box.innerHTML != "") {
    localStorage.setItem("note", box.innerHTML);
  }
  if (localStorage.note != null) {
    box.innerHTML = localStorage.getItem("note");
  }
}
function updateKeyNote() {
  localStorage.setItem("note", box.innerHTML);
}
function addField() {
  let field = document.createElement("p");
  let deleteImg = document.createElement("img");
  deleteImg.src = "icones/delete.png";
  deleteImg.setAttribute("id", "delete");
  
  deleteImg.setAttribute("onclick", "deleteNote(this.id)");
  field.appendChild(deleteImg);
  field.setAttribute("class", "inputfield");
  field.setAttribute("id", "inputfield");
  field.setAttribute("onkeyup", "updateKeyNote()");
  field.setAttribute("contenteditable", "true");
  box.appendChild(field);
  update();
}
function deleteNote(id) {
  Delete = document.getElementById(id);
  Delete.parentElement.remove();
  updateKeyNote();
}
update();

document.addEventListener('keydown',event =>{
    if (event.key=='Enter'){
        document.execCommand('insertLineBreak');
        event.preventDefault();
    }
})