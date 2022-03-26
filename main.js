var SpeechRecognition = window.webkitSpeechRecognition;
var Lia=new SpeechRecognition();
var camera=document.getElementById("camera")


function stbutton(){
    Lia.start()

}
Lia.onresult = function(event){
console.log(event)
var content=event.results[0][0].transcript

if (content =="selfie")
{
  console.log("taking selfie --- ");
Speech()
}
}

function Speech(){
var synth=window.speechSynthesis;
var data= "Taking Your Selfie In 5 Seconds"
var speech=new SpeechSynthesisUtterance(data)
synth.speak(speech)
Webcam.attach(camera);
setTimeout(function()  {
  takesnap()
  save()
}, 5000);
}

Webcam.set({
    width:600,
    height:300,
    image_format:'png',
    png_quality:100
});
function takesnap(){
Webcam.snap(function(data_uri){
document.getElementById("cap_img").innerHTML='<img id ="snappy" src="'+data_uri+'" >';

});
}
function save(){
link=document.getElementById("link")
image=document.getElementById("snappy").src
link.href=image
link.click()
}