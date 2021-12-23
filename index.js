function diceRandom(){
  return Math.floor(Math.random()*6+1);
}
var n1 = diceRandom();
var n2 = diceRandom();
function changeImg(n1,n2){
  document.querySelector(".img1").setAttribute("src","images/dice"+n1+".png");
  document.querySelector(".img2").setAttribute("src","images/dice"+n2+".png");
}
changeImg(n1, n2);
if (n1>n2) {
    document.querySelector("h1").innerHTML="Player 1 Wins!";
    document.querySelector(".p1").classList.add("hidden");
}else if (n1 == n2){
    document.querySelector("h1").innerHTML="Draw!";
}else{
    document.querySelector("h1").innerHTML="Player 2 Wins!";
    document.querySelector(".p2").classList.add("hidden");
}
