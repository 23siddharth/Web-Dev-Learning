var rn1=1+Math.floor(Math.random()*6);
var rn2=1+Math.floor(Math.random()*6);
var s1="./images/dice"+rn1+".png";
var s2="./images/dice"+rn2+".png";
document.querySelector(".img1").setAttribute("src",s1);
document.querySelector(".img2").setAttribute("src",s2);
var h=document.querySelector("h1");
if(rn1>rn2)
    h.innerHTML="🔥P1 Wins";
else if(rn2>rn1)
    h.innerHTML="P2 Wins🔥";
else
h.innerHTML="Draw!";
