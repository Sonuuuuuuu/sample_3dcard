const card=document.querySelector(".card");
const container=document.querySelector(".container");
const title=document.querySelector(".title");
const sneaker=document.querySelector(".sneaker img");
const description=document.querySelector(".info h3");
const sizes=document.querySelector(".sizes");
const purchase=document.querySelector(".purchase");

container.addEventListener("mousemove",(e)=>{
    let xaxis=(window.innerWidth/2-e.pageX)/25;
    let yaxis=(window.innerHeight/2-e.pageY)/25;
    card.style.transform=`rotateY(${xaxis}deg)rotateX(${yaxis}deg)`;

});
container.addEventListener("mouseenter",(e)=>{
    card.style.transform="none";
    title.style.transform="translateZ(150px)";
    sneaker.style.transform="translateZ(200px)rotateZ(-25deg)";
    description.style.transform="translateZ(125px)";
    sizes.style.transform="translateZ(100px)";
    purchase.style.transform="translateZ(75px)";
});
//animate out
container.addEventListener("mouseleave",(e)=>{
    card.style.transition="all 0.5s ease";
    card.style.transform=`rotateY(0deg)roatateX(0deg)`;
   //popback
   title.style.transform="translateZ(0px)";
   sneaker.style.transform="translateZ(0px)";
   description.style.transform="translateZ(0px)";
   sizes.style.transform="translateZ(0px)";
   purchase.style.transform="translateZ(0px)";

})