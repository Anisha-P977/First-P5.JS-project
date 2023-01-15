function preload(){
    
    }
    
    function setup(){
    canvas = createCanvas(450,350);
    canvas.position(100, 250);
    video = createCapture(VIDEO);
    video.hide();
    tint_colour = "";
    
    }
    
     function draw(){
    strokeWeight(5);
    stroke(color(200,50,130))
    rect(25, 25, 400, 300);
    image(video, 25, 25, 400, 300);
    tint(tint_colour);
    c= color(230,230,250);
    fill(c);
    stroke(color(120,190,33));
    ellipse(30, 35, 55, 55);
    ellipse(420, 35, 55, 55);
    ellipse(420, 320, 55, 55);
    ellipse(30, 320, 55, 55);
     }
    
     function take_snapshot(){
         save("My framed image.jpg");
    
     }
    
     function filter_colour(){
         tint_colour = document.getElementById("colour_name").value;
     }