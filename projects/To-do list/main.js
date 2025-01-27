const inp = document.getElementById("inp");
const btn = document.getElementById("btn");
const list = document.getElementById("list");
let tesks = document.querySelectorAll('li')
let X = document.querySelectorAll("span")


btn.onclick = function () {
    if (inp.value != "") {
        let Delete = document.createElement('span')
        Delete.innerHTML = 'X'
        let li = document.createElement('li');
        li.innerHTML = inp.value
        li.appendChild(Delete)
        list.appendChild(li);
    } else {
        alert('Please enter your tesk!')
    }
    inp.value=''
    savaData()
    showData()
    
};

function savaData() {
    localStorage.setItem('tesks', list.innerHTML)

}
function showData() {
    if (localStorage.tesks != null) {
        list.innerHTML = localStorage.getItem('tesks')
        X = document.querySelectorAll("span")
        tesks = document.querySelectorAll('li')
        tesks.forEach(tesk => {
            tesk.onclick = function () {
                
                if (tesk.className == 'checked') {
                    tesk.className = ''
                } else {
                    tesk.classList.add('checked')
                    
                }
                savaData()
            }
        });
        X.forEach(xbtn => {
        
            xbtn.onclick = function () {
                
                this.parentElement.remove()
                savaData()
            }
        });
    }
}
showData()