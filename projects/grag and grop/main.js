inp = document.getElementById("inp");
btn = document.getElementById("btn");
boxes = document.querySelectorAll("#box");
drag = null;
btn.onclick = function () {
  if (inp.value != "") {
    boxes[0].innerHTML += `
        <p class="item" draggable="true">${inp.value}</p>`;
    inp.value = "";
  }
  dragItem();
};
function dragItem() {
  let items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("dragstart", function () {
      drag = item;
      item.style.opacity = "0.5";
    });
    item.addEventListener("dragend", function () {
      drag = null;
      item.style.opacity = "1";
    });
    boxes.forEach((box) => {
      box.addEventListener("dragover", function (e) {
        e.preventDefault();
        this.style.background = "rgb(255, 174, 24)";
        this.style.color = "hotpink";
      });
      box.addEventListener("dragleave", function () {
        this.style.background = "wheat";
        this.style.color = "#fff";
      });
      box.addEventListener("drop", function () {
        box.append(drag);
        this.style.background = "wheat";
        this.style.color = "#fff";
      });
    });
  });
}
