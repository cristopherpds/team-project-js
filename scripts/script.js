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
var finishButton = document.querySelector("#finishButton");

function showBasic() {
    if (flagProgress > 1) {
        basic.classList.remove("hide");
        basic.classList.add("show");
        social.classList.add("hide");
        certificates.classList.add("hide");
        social.classList.remove("show");
        certificates.classList.remove("show");
    }

}

function showSocial() {
    if (flagProgress >= 2) {

            social.classList.remove("hide");
            social.classList.add("show");
            basic.classList.add("hide");
            certificates.classList.add("hide");
            basic.classList.remove("show");
            certificates.classList.remove("show");

    } else {
        validatorsBasic();
        showBasic();
    }
} 


function showCertificates() {
    if (flagProgress == 3) {
        certificates.classList.remove("hide");
        certificates.classList.add("show");
        basic.classList.add("hide");
        social.classList.add("hide");
        basic.classList.remove("show");
        social.classList.remove("show");
    } else {
        validatorsSocial();
        showCertificates();
    }
}

function preventDefault(event) {
    event.preventDefault;
}


finishButton.addEventListener("click", function (e) {
    e.preventDefault()
    //alert("Parabéns, você foi cadastrado com sucesso!")
    showBasic();
})