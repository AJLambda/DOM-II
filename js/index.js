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
footer = document.querySelector('.footer');
console.log('Footer:', footer);

//BODY EVENT LISTENERS
//Logs when a key is pressed down, the item that was pressed down
body.addEventListener('keydown', function(event){
    console.log(`Someone pressed a key down! This is the event: ${event.key}`)
});

//Select event shows what texts has been selected
body.addEventListener('select', function(event){
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    console.log(`you selected: ${selection}`);
});

//HEADER EVENT LISTENERS
//Make header larger and change color/pointer when hovering over with mouse
funBusHeading.addEventListener('mouseover', function() {
    this.classList.add('funBusHeading');
});
//Make header return to original state when hovering out
funBusHeading.addEventListener('mouseleave', function() {
    this.classList.remove('funBusHeading');
});
//Changes color of each navigation item when clicked
navAnchors.forEach(node => {
    node.addEventListener('click', function(event){
        //stop the nav items from refreshing the page
        event.preventDefault();
        event.target.style.color = 'gray';
    });
});

//H4 EVENT LISTENERS
//Changes color of all h4's when pointer is moved while over the element
allH4.forEach(node => {
    node.addEventListener('mousemove', function(event){
        event.target.style.color = 'green';
    });
});

//TEXT CONTENT EVENT LISTENERS
//Alert when any part of text content is copied.
textContent.addEventListener('copy', function(event){
    alert('You copied some text content');
});

//PARAGRAPH EVENT LISTENERS
//Alert when any part of paragraph is copied.
allParagraphs.forEach(node => {
    node.addEventListener('copy', function(event){
        alert("You copied a paragraph :0");
        event.stopPropogation();
        });
});

//FOOTER EVENT LISTENERS    
//Changes color of footer background to button color on right-click
footer.addEventListener('contextmenu', function(){
    event.target.style.background = '#17A2B8';
});

