nose_x = 0;
nose_y = 0;

function preload(){
    img = loadImage("https://i.postimg.cc/ZYjkC5pC/clownnose.png");
}

function setup(){
      canvas = createCanvas(300, 300);
      canvas.center();
      video = createCapture(VIDEO);
      video.size(300,300);
      video.hide();

      posenet = ml5.poseNet(video,modelLoaded);
      posenet.on('pose',gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x + -15;
        nose_y = results[0].pose.nose.y + -15;
        console.log("nose x = " + nose_x);
        console.log("nose y = " + nose_y);
    }
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function draw(){
      image(video,0,0,300,300);
      fill(255,0,0);
      stroke(255,0,0)
      image(img,nose_x,nose_y,25,25);
}

function snapshot(){
    save("filter.png");
}