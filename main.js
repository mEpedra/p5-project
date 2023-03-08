function preload() {
    }
    
    function setup() {
      canvas = createCanvas(640, 480);
      canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    }
    function draw() {
    image(video, 0, 0, 640, 400 );
    stroke("green")
    fill("green")
    rect(0, 0, 30, 480)
    rect(610, 0, 30, 480)
    rect(0, 450, 640, 30)
    rect(0, 0, 640, 30)
    stroke("red")
    fill("red")
    circle(40,40, 100)
    circle(600,440,100)
    circle(600,40,100)
    circle(40,440,100)

    }
    function take_snapshot(){
        save("student_name.png");
    }
