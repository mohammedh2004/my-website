let red= document.getElementById('red')
let goldenrod= document.getElementById('goldenrod')
let gold= document.getElementById('gold')
let gray= document.getElementById('gray')
let skyblue= document.getElementById('skyblue')
let mainImg=document.getElementById('mainImg')
gray.style.scale=1.2
function change(color,img){
    returnScale()
    document.body.style.background=color
    mainImg.src=img
     who_is_focus=document.getElementById(color)
     who_is_focus.style.scale=1.2
     
    
}
function returnScale(){
    red.style.scale=1
    goldenrod.style.scale=1
    gold.style.scale=1
    gray.style.scale=1
    skyblue.style.scale=1
   
}