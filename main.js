let body = document.body;
let bodyBackground = "#202124";
let btn = document.getElementById("btn");
btn.onclick = function changemode() {
  if (bodyBackground == "#202124") {
    body.style.background = "#e2e2e2";
    body.style.setProperty("--after-background", "#c5c5c5");
    body.style.setProperty("--color-text", "#000");
    bodyBackground = "#e2e2e2";
    btn.innerHTML=`<i class='bx bx-moon' ></i>`
  } else if (bodyBackground == "#e2e2e2") {
    document.body.style.background = "#202124";
    body.style.setProperty("--after-background", "#333");
    body.style.setProperty("--color-text", "#fff");
    bodyBackground = "#202124";
    btn.innerHTML=`<i class='bx bx-sun'></i>`
  }

};
