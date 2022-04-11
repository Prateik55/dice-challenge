var randonmNumber1 =Math.random();
randonmNumber1=(randonmNumber1*6);
randonmNumber1= Math.floor(randonmNumber1)+1;

var src_new ;
diceRoll();

var image_src= document.getElementsByClassName("img1");

var image=image_src.setAttribute();


function diceRoll() {
    if (randonmNumber1 ===1){
        src_new= ("images\dice1.png")
    }
    else if (randonmNumber1 ===2){
        src_new= ("images\dice2.png")
    }
    else if (randonmNumber1 ===3){
        src_new= ("images\dice3.png")
    }
    else if (randonmNumber1 ===4){
        src_new= ("images\dice4.png")
    }
    else if (randonmNumber1 ===5){
        src_new= ("images\dice5.png")
    }
   else {
        src_new= ("images\dice6.png")
    }
    return src_new;


}

