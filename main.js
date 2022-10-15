status = "";
img="";
objects = [];

function preload(){
    img = loadImage('Ipad and Phone 2.0.jpg');
}

function setup(){
canvas = createCanvas(640, 420);
canvas.center();
objectDetector = ml.js.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "status : detecting objects";
}

function modelLoaded (){
    console.log(" model Loaded ");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult (results, error){
if (error){
    console.log(error);
}
console.log(results);
}



function draw (){
    image(img, 0, 0, 640, 420);
    if(status!=""){
        for(i = 0; i< objects.length; i++){
            document.getElementById("status").innerHTML = "status:object detected";
    
    fill("#ff0000");
    percent = floor(objects[i].confidence * 100);
    text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y + 15);
    
    noFill();
    stroke("#ff0000");
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    
    }
     
     }
    }