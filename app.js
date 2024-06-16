// refresh the page to roll the dice

var p1 = Math.floor(((Math.random()*6 )+1));

// const diceImage = document.getElementsByClassName("img1");
// diceImage.src = `images/dice${p1}.png`;


var dice_num= ("dice"+p1+".png");
var dice_ref= ("images/"+dice_num);

var set_dice1=document.querySelectorAll("img")[0];
set_dice1.setAttribute("src",dice_ref);


var p2 = Math.floor(((Math.random()*6 )+1));

var dice2= ("dice"+p2+".png");
var dice2_ref= ("images/"+dice2);

var set_dice2=document.querySelectorAll("img")[1];
set_dice2.setAttribute("src",dice2_ref);


if (p2>p1) {
    document.querySelector("h1").textContent="Player 2 Wins!"
}

else if (p2<p1) {
    document.querySelector("h1").textContent="Player 1 Wins!";
    
}

else if (p2==p1) {
   
   document.querySelector("h1").textContent="It's a Draw!";
   }

