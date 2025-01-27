let speech= new SpeechSynthesisUtterance();
let btn =document.getElementById('btn');
let voices=[];
let voiceSelect=document.querySelector('select');



window.speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices()
    speech.voice=voices[0];
    voices.forEach((voice,i)=>(voiceSelect.options[i]=new Option(voice.name,i

    )));
    console.log(voices);
    
}

voiceSelect.addEventListener('change',()=>{
    speech.voice=voices[voiceSelect.value]
})


btn.onclick=function(){
    speech.text =document.querySelector('.textbox').innerHTML;
    window.speechSynthesis.speak(speech);

}