right_hand = "";
left_hand = "";

function preload() {
    b_l = loadSound("blankspace.mp3");
    h_p = loadSound("harrythemesong.mp3");
}

function setup() {
    canvas = createCanvas(450,325);
    canvas.position(450,175)
    //load camera
    video= createCapture(VIDEO);
    video.size(450,300);
    video.position(450,190);
}