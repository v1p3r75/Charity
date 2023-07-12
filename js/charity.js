// The slide show
var slides = document.getElementsByClassName("slide");
var dots = document.getElementsByClassName("dot");
var help = document.querySelector(".help")
var helps = document.querySelectorAll(".v")
var nav = document.querySelector("nav")
var drop = document.querySelector(".drop")
var sm = document.querySelector(".sm")

var index = 1;

function next(){
  slideShow(index +=1)
}
function current(n){
  slideShow(index = n)
}
function slideShow(n){
  var count;
  if (n > slides.length) {index = 1}
  if (n < 1) {index = slides.length}
  for(count = 0; count < slides.length ; count ++){
    dots[count].className = dots[count].className.replace(" dotstyle", "")
  }
  for (count = 0; count < slides.length; count ++){
    slides[count].style.display = "none";
  }
  slides[index - 1].style.display = "block"
  dots[index-1].className += " dotstyle";
}
slideShow()


var elmts = document.querySelectorAll(".text")
if(IntersectionObserver){
  const ratio = 0.3;
  const options = {
    root: null,
    rootMargin : "0px",
    threshold : ratio,
  }
  function animate(e,obs){
    e.forEach(function(entry){
      if (entry.intersectionRatio > ratio){
        entry.target.classList.add("opacity")
        entry.target.classList.add("anim")
      }
      else if(entry.intersectionRatio < 0.2){
        entry.target.classList.remove("opacity")
        entry.target.classList.remove("anim")
      }
    })
  }
  const observer = new IntersectionObserver(animate, options)
  
  elmts.forEach(function(r,i){
    observer.observe(r)
  })
}

setInterval(next,5000)

//helps.forEach(function(e){
//  e.style.width = (help.getBoundingClientRect().width / 3) - 40+"px"
//})
var elements = document.querySelectorAll(".helper > div")
var index = 0;
var value = -100

function defile(){

  if(index == 2 || index > 2){
    elements.forEach(function(e){
      e.style.transform = "translateX(0)";
    })
    index = 0
    value = -100
    console.log(index);
 }else {
   elements.forEach(function(e){
     e.style.transform = "translateX("+String(value)+"%)";
   })
   index += 1
   value -= 100
   console.log(index)
 }
}
function arriere(){
  index -= 1;
  elements.forEach(function(e){
    e.style.transform = "translateX(0)";
})
}

document.querySelector(".suivant").addEventListener("click",defile)
document.querySelector(".prec").addEventListener("click",arriere)

window.addEventListener("scroll",function(){
  if(window.scrollY > 400){
    nav.classList.add("fixed")
  }else {
    nav.classList.remove("fixed")
  }
})
drop.addEventListener("mouseover",function(){sm.classList.add("block")})
drop.addEventListener("mouseout",function(){sm.classList.remove("block")})
