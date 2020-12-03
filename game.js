class Game{
    constructor (){

    }

    start(){
    kid = createSprite(600, 990, 50, 50);
    kid.addImage("kid", kid_img);
    kid.scale = 0.7;

    if(score % 100 === 0){
    book = createSprite(30, 390, 30, 30);
    book.addImage("book", book_img);
    book.velocityY = 5;
    book_group.add(book);
    book.x = random(30, 390);
    book.scale = 0.1;
    }

    if(score % 200 === 0){
    crayon = createSprite(40, 390, 10, 10);
    crayon.addImage("crayon", crayon_img);
    crayon.velocityY = 5;
    crayon_group.add(crayon);
    crayon.x = random(30, 1600);
    crayon.scale = 0.1;
    }

    if(score % 300 === 0){
    backpack = createSprite(50, 390, 10, 10);
    backpack.addImage("backpack", backpack_img);
    backpack.velocityY = 5;
    backpack_group.add(backpack);
    backpack.x = random(30, 1600);
    backpack.scale = 0.1;
    }

    if(score % 300 === 0){
    bottle = createSprite(60, 390, 10, 10);
    bottle.addImage("bottle", bottle_img);
    bottle.velocityY = 5;
    bottle_group.add(bottle);
    bottle.x = random(30, 1600);
    bottle.scale = 0.2;
    }
    
    if(score % 300 === 0){
    computer = createSprite(70, 390, 10, 10);
    computer.addImage("computer", computer_img);
    computer.velocityY = 5;
    computer_group.add(computer);
    computer.x = random(30, 1600);
    computer.scale = 0.1;
    }

    if(score % 300 === 0){
    phone = createSprite(80, 390, 10, 10);
    phone.addImage("phone", phone_img);
    phone.velocityY = 5;
    phone_group.add(phone);
    phone.x = random(30, 1600);
    phone.scale = 0.1;
    }
    
    if(score % 300 === 0){
    camera = createSprite(90, 390, 10, 10);
    camera.addImage("camera", camera_img);
    camera.velocityY = 5;
    camera_group.add(camera);
    camera.x = random(30, 1600);
    camera.scale = 0.1;
    }
    
    if(score % 300 === 0){
    headphone = createSprite(100, 390, 10, 10);
    headphone.addImage("headphone", headphone_img);
    headphone.velocityY = 5;
    headphone_group.add(headphone);
    headphone.x = random(30, 1600);
    headphone.scale = 0.1;
    }
}

    play(){
    
    }

    end(){

    }
}
