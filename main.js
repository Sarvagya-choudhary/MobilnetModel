Webcam.set({
    width:308,
    height:300,
    image_format:'png',
    png_quality:90,
    constraints:{
        facingMode:"environment"
    }
});
camera=document.getElementById("camera");
Webcam.attach(camera);
function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("snapshot").innerHTML="<img id='SnapShot' src='"+data_uri+"'>";
    });
}
console.log("ml5",ml5.version);
classifier=ml5.imageClassifier("MobileNet",modelLoaded);
function modelLoaded(){
    console.log("Model Loaded");
}
function check(){
    image=document.getElementById("SnapShot");
    classifier.classify(image,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("results").innerHTML=results[0].label;
    }
}