let inp1 = document.getElementById('inp1');
let inp2 = document.getElementById('inp2');
let sum = document.getElementById('sum');
let sub = document.getElementById('sub');
let subd = document.getElementById('subd');
let mul = document.getElementById('mul');
let equal = document.getElementById('equal');
let space = document.getElementById('delete');
let numbers = document.querySelectorAll('.num');
let currentInput=inp1;
let operation;
let ruselt;
inp2.style.display='none';
inp1.focus();

function activeInput(){
    inp1.addEventListener('focus',()=>{
        currentInput=inp1
        
    })
    inp2.addEventListener('focus',function(){
        currentInput=inp2
        
    })
}

function takenum(num){
    currentInput.value+=num

}
function spaceNum(){
    if (currentInput.value.length>0){
        cutInput=currentInput.value.slice(0,-1)
        currentInput.value=cutInput
        
    }
}
function operationIs(nameOfOperation){
    operation=nameOfOperation
    inp2.style.display='inline'
    inp2.focus()
    currentInput=inp2
}
function showRuselt(){
    inp2.style.display='none'
    
    if (operation=='sum'){
        ruselt=+inp1.value+ +inp2.value
        inp1.value=ruselt
    }else if (operation=='sub'){
        ruselt=+inp1.value- +inp2.value
        inp1.value=ruselt
    }
    else if (operation=='subd'){
        ruselt=+inp1.value/ +inp2.value
        inp1.value=ruselt
    }
    else if (operation=='mul'){
        ruselt=+inp1.value* +inp2.value
        inp1.value=ruselt
    }
    inp1.focus()
    currentInput=inp1
    inp2.value=''
}
