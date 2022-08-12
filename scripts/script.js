// function openTab(evt, tabName) {
//     var i, tabcontent, tablinks;

//     // Get all elements with class="tabcontent" and hide them
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }

//     // Get all elements with class="tablinks" and remove the class "active"
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace("active", "");
//     }


//     // Show the current tab, and add an "active" class to the button that opened the tab
//     document.getElementById(tabName).style.display = "block";
//     evt.classList.add("nav-button-active");
// }

// Get the element with id="defaultOpen" and click on it

var basic = document.querySelector("#basic");
var social = document.querySelector("#social");
var certificates = document.querySelector("#certificates");
var heart = document.querySelector("#heart-icon");


function hideTabSc() {
    if (flagProgress > 1){
        basic.classList.remove("hide");
        basic.classList.add("show");
        social.classList.add("hide");
        certificates.classList.add("hide");
        social.classList.remove("show");
        certificates.classList.remove("show");
    }

}

function hideTabBc() {
    if (flagProgress >= 2) {
        social.classList.remove("hide");
        social.classList.add("show");
        basic.classList.add("hide");
        certificates.classList.add("hide");
        basic.classList.remove("show");
        certificates.classList.remove("show");
    } else {
        validatorsBasic();
        hideTabSc();
    }
}

function hideTabBs() {
    if (flagProgress == 3) {
        certificates.classList.remove("hide");
        certificates.classList.add("show");
        basic.classList.add("hide");
        social.classList.add("hide");
        basic.classList.remove("show");
        social.classList.remove("show");
    } else {
        validatorsSocial();
        hideTabBs();
    }
}

function preventDefault(event) {
    event.preventDefault;
}

function changeColor() {
    heart.classList.toggle("btn-primary")
}