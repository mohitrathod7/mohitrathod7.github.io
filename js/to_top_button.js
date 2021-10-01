// Scroll to Top function

//Get the button
var toTopButton = document.getElementById("toTop");
var content = document.getElementsByClassName("content")[0];


// When the user scrolls down 100px from the top of the document, show the button
content.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (content.scrollTop > 100) {
        toTopButton.style.display = "block";
    } else {
        toTopButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function toTop() {
    content.scrollTop = 0;
}