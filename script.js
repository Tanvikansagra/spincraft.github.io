



function toggleMenu(){
document.getElementById("menu").classList.toggle("active");
}


function openInquiry(){
document.getElementById("inquiryBox").classList.add("active");
}


function closeInquiry(){
document.getElementById("inquiryBox").classList.remove("active");
}



/* SCROLL ANIMATION */

const observerOptions = {
threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.classList.add("show");

}

});

}, observerOptions);



document.addEventListener("DOMContentLoaded", () => {

/* Animate About Section Content */

const aboutContent = document.querySelector('.about-main-content');
const sideText = document.querySelector('.reveal-text');

if(aboutContent){

aboutContent.style.opacity = "0";
aboutContent.style.transform = "translateY(40px)";
aboutContent.style.transition = "all 0.8s ease";

observer.observe(aboutContent);

}

if(sideText){

sideText.style.opacity = "0";
sideText.style.transition = "opacity 1.2s ease";

observer.observe(sideText);

}
const btns = document.querySelectorAll(".company-btn");

btns.forEach(btn => {

btn.addEventListener("click", function(){

const content = this.nextElementSibling;

if(content.style.display === "block"){
content.style.display = "none";
}
else{
content.style.display = "block";
}

});

});

/* Animate all elements with class animate */

const animatedElements = document.querySelectorAll(".animate");

animatedElements.forEach(el => {
observer.observe(el);
});
let lastScrollTop = 0;

window.addEventListener("scroll", function() {

let header = document.querySelector("header");
let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

if (scrollTop > lastScrollTop) {

header.style.top = "-120px";   // hide header

} else {

header.style.top = "0";        // show header

}

lastScrollTop = scrollTop;


});
});




/* TIMELINE ANIMATION */

const timeline = document.querySelector(".timeline");
const timelineItems = document.querySelectorAll(".timeline-item");

const timelineObserver = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

timeline.classList.add("show-line");

timelineItems.forEach((item,i)=>{

setTimeout(()=>{
item.classList.add("show");
}, i * 200);

});

}

});

},{threshold:0.3});

timelineObserver.observe(timeline);


const industryCards = document.querySelectorAll(".industry-card");

const industryObserver = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";
}

});

},{threshold:0.3});

industryCards.forEach(card=>{
card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition="all .6s ease";
industryObserver.observe(card);
});

function submitForm(){

alert("Thank you! Your inquiry has been submitted successfully.");

}




const arrows = document.querySelectorAll(".arrow");
const icons = document.querySelectorAll(".timeline-icons img");

arrows.forEach((arrow, index)=>{
  arrow.addEventListener("click", ()=>{

    arrows.forEach(a=>a.classList.remove("active"));
    arrow.classList.add("active");

    icons.forEach(i=>i.style.opacity="0.5");
    icons[index].style.opacity="1";

  });
});












