
var kid, book, crayon, backpack, bottle, computer, phone, camera, headphone;
var book_group, crayon_group, backpack_group, bottle_group, computer_group, phone_group, camera_group, headphone_group;
var kid_img, book_img, crayon_img, backpack_img, bottle_img, computer_img, phone_img, camera_img, headphone_img;

var gameState = 0;
var story;
var game;
var schoolSupplies, electronics;
var score = 0;




function preload() {
    kid_img = loadImage("Images/kid.png");
    book_img = loadImage("Images/book 1.png");
    crayon_img = loadImage("Images/crayon 1.png");
    backpack_img = loadImage("Images/backpack 1.jpg");
    bottle_img = loadImage("Images/bottle 1.jpg");
    computer_img = loadImage("Images/computer 1.png");
    phone_img = loadImage("Images/phone 1.png");
    camera_img = loadImage("Images/camera 1.jpg");
    headphone_img = loadImage("Images/headphone 1.png");
 
    

}

function setup(){
    var canvas = createCanvas(displayWidth - 30, displayHeight);
   

    book_group = createGroup();
    crayon_group = createGroup();
    backpack_group = createGroup();
    bottle_group = createGroup();
    computer_group = createGroup();
    phone_group = createGroup();
    camera_group = createGroup();
    headphone_group = createGroup();


   
    game = new Game();
    
    schoolSupplies = createGroup();
    electronics = createGroup();

    



}

function draw(){
    
        background("white");
        text("Score" + score, 100, 50);
        
        if(gameState === 0){
            story = new Story();
            story.display();
        }

        if(gameState === 1){
            game.start();
            game.play();
            score = score + 1;
        }

        

        


        drawSprites()
}

function keyPressed(){
    if(keyCode === 32){
        story.hide();
        gameState = 1;
    }
}




