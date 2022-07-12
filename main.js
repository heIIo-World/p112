prediction1 = "";
prediction2 = "";

Webcam.set({
    width:350,
    height:260,
    image_format: 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri + '"/>';
    });
}

console.log('ml5 version: ', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/SqD0RYFtx/model.json', modelLoaded);

function modelLoaded(){
    console.log('model loaded!');
}

function speak(){
   
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is "+ prediction1;
    speak_data_2 = "The second prediction is "+ prediction2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}

function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if (error) {
    console.error(error);
    } else {
    console.log(results);
    document.getElementById("result_emotion_name").innerHTML = results[0].label;
document.getElementById("result_emotion_name2").innerHTML = results[1].label;
    prediction1 = results[0].label;
    prediction2 = results[1].label;
    speak();
        
if(results[0].label =="thumbs up")
{
 document.getElementById("update_emoji").innerHTML = "&#128077";
}
if(results[0].label =="thumbs down")
{
 document.getElementById("update_emoji").innerHTML = "&#128078";
}
if(results[0].label =="point up")
{
 document.getElementById("update_emoji").innerHTML = "&#128070";
}
if(results[0].label =="crossed fingers")
{
 document.getElementById("update_emoji").innerHTML = "&#129310";
}
if(results[0].label =="victory")
{
 document.getElementById("update_emoji").innerHTML = "&#9996";
}
if(results[0].label =="raised hand")
{
 document.getElementById("update_emoji").innerHTML = "&#9995";   
}
if(results[0].label =="pray")
{
 document.getElementById("update_emoji").innerHTML = "&#128591";
}
if(results[0].label =="ok")
{
 document.getElementById("update_emoji").innerHTML = "&#128076";  
}   
    
if(results[1].label =="thumbs up")
{
 document.getElementById("update_emoji2").innerHTML = "&#128077";
}
if(results[1].label =="thumbs down")
{
 document.getElementById("update_emoji2").innerHTML = "&#128078";
}
if(results[1].label =="point up")
{
 document.getElementById("update_emoji2").innerHTML = "&#128070";
}
if(results[1].label =="crossed fingers")
{
 document.getElementById("update_emoji2").innerHTML = "&#129310";
}
if(results[1].label =="victory")
{
 document.getElementById("update_emoji2").innerHTML = "&#9996";
}
if(results[1].label =="raised hand")
{
 document.getElementById("update_emoji2").innerHTML = "&#9995";   
}
if(results[1].label =="pray")
{
 document.getElementById("update_emoji2").innerHTML = "&#128591";
}
if(results[1].label =="ok")
{
 document.getElementById("update_emoji2").innerHTML = "&#128076"; 
}
}
} 