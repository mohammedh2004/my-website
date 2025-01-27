let hrs = document.getElementById('hrs')
let min = document.getElementById('min')
let sec = document.getElementById('sec')

function getTime(){
    let currentTime= new Date()
    hrs.innerHTML=currentTime.getHours()
    min.innerHTML=currentTime.getMinutes()
    sec.innerHTML=currentTime.getSeconds()
}
setInterval(function(){getTime()},1000)