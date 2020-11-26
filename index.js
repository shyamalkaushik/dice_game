
var randomvariable=Math.floor((Math.random()*6)+1);
var randomvariable2=Math.floor((Math.random()*6)+1);

//alert(randomvariable);
if(randomvariable>randomvariable2)
{
      document.querySelector("h1").innerHTML="winner 1";
}

if(randomvariable2>randomvariable)
{
      document.querySelector("h1").innerHTML="winner 2";
}

if(randomvariable==randomvariable2)
{
      document.querySelector("h1").innerHTML="dear";
}

if(randomvariable==1)
{
   document.querySelector("img.img1").setAttribute("src","images/dice1.png");
}
if(randomvariable==2)
{
   document.querySelector("img.img1").setAttribute("src","images/dice2.png");
}
if(randomvariable==3)
{
   document.querySelector("img.img1").setAttribute("src","images/dice3.png");
}
if(randomvariable==4)
{
   document.querySelector("img.img1").setAttribute("src","images/dice4.png");
}
if(randomvariable==5)
{
   document.querySelector("img.img1").setAttribute("src","images/dice5.png");
}
if(randomvariable==6)
{
   document.querySelector("img.img1").setAttribute("src","images/dice6.png");
}


console.log(randomvariable2);

if(randomvariable2==1)
{
   document.querySelector("img.img2").setAttribute("src","images/dice1.png");
}
if(randomvariable2==2)
{
   document.querySelector("img.img2").setAttribute("src","images/dice2.png");
}
if(randomvariable2==3)
{
   document.querySelector("img.img2").setAttribute("src","images/dice3.png");
}
if(randomvariable2==4)
{
   document.querySelector("img.img2").setAttribute("src","images/dice4.png");
}
if(randomvariable2==5)
{
   document.querySelector("img.img2").setAttribute("src","images/dice5.png");
}
if(randomvariable2==6)
{
   document.querySelector("img.img2").setAttribute("src","images/dice6.png");
}
