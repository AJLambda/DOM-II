// Your code goes here

//Selectors
body = document.querySelector('body');
console.log('Body:', body);
funBusHeading = document.querySelector('.logo-heading');
console.log('Logo-Heading:', funBusHeading);
navBar = document.querySelector('.nav');
console.log('Nav Bar:', navBar);
navAnchors = document.querySelectorAll('.nav-link');
console.log('Nav Items:', navAnchors);
allH2 = document.querySelectorAll('h2');
console.log('All h2s:', allH2);
allH4 = document.querySelectorAll('h4');
console.log('All h4s:', allH4);
textContent = document.querySelector('.text-content');
console.log('text content:', textContent)
allParagraphs = document.querySelectorAll('p');
console.log('All paragraphs:', allParagraphs);
allButtons = document.querySelectorAll('.btn');
console.log('All buttons:', allButtons);
firstButton = document.querySelector('.btn');
console.log('First button:', firstButton)
footer = document.querySelector('.footer');
console.log('Footer:', footer);

//BODY EVENT LISTENERS
//Runs when a key is pressed and console logs that key
body.addEventListener('keydown', function(event){
    console.log(`Someone pressed a key down! This is the event: ${event.key}`)
});
//Runs when a key is released and console logs that key
body.addEventListener('keyup', function(event){
    console.log(`Someone released the key! This is the event: ${event.key}`)
});

//HEADER EVENT LISTENERS
//Turn on new class properties in css
//Make heading larger and change color/pointer when hovering over with mouse
funBusHeading.addEventListener('mouseenter', function() {
    this.classList.add('funBusHeading');
    TweenMax.to(".funBusHeading", 1.5, {y: 200, x: 20, ease: Bounce.easeOut})
});

//Remove new class properties in css
//Make heading return to original state when hovering out
// funBusHeading.addEventListener('mouseleave', function() {
//     this.classList.remove('funBusHeading');
// });
//Changes color of each navigation item when clicked
navAnchors.forEach(node => {
    node.addEventListener('click', function(event){
        //stop the nav items from refreshing the page
        event.preventDefault();
        event.target.style.color = 'gray';
    });
});
//Changes color of each navigation item when double clicked
navAnchors.forEach(node => {
    node.addEventListener('dblclick', function(event){
        //stop the nav items from refreshing the page
        event.preventDefault();
        event.target.style.backgroundColor = 'lightgray';
    });
});

//H2 EVENT LISTENERS
//changes color of all h2's when pointer is moved while over the element
allH2.forEach(node => {
    node.addEventListener('mousemove', function(event){
        event.target.style.color = "orange";
    });
});

//H4 EVENT LISTENERS
//Changes color of all h4's when pointer is moved while over the element
allH4.forEach(node => {
    node.addEventListener('mousemove', function(event){
        event.target.style.color = 'green';
    });
});

//TEXT CONTENT CLASS EVENT LISTENERS
//Alert when any part of text content is copied.
textContent.addEventListener('copy', function(event){
    alert('We know you copied that text content >.<');
    //prevents bubbling
    event.stopPropagation();
});

//PARAGRAPH EVENT LISTENERS
//Alert when any part of paragraph is copied and turn paragraph red after
allParagraphs.forEach(node => {
    node.addEventListener('copy', function(event){
        alert("We know you copied that paragraph :0");
        event.target.style.color = "red";
        //prevents bubbling
        event.stopPropagation();
        });
});

//BUTTON EVENT LISTENERS
//Change font size and cursor when mouse enters element
allButtons.forEach(node => {
    node.addEventListener('mouseenter', function(){
    event.target.style.fontSize = "2.5rem";
    event.target.style.cursor = "progress"; 
    });
});
//Remove all elements when mouse leaves element
allButtons.forEach(node => {
    node.addEventListener('mouseleave', function(){
    node.remove()
    });
});

//FOOTER EVENT LISTENERS    
//Changes color of footer background to button color on right-click
footer.addEventListener('contextmenu', function(){
    event.target.style.background = '#17A2B8';
});

