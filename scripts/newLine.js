const button = document.getElementById("morebtn");
const buttonX = document.getElementById("buttonX")
const buttonH = document.getElementById("buttonH")
var i = 0;
button.addEventListener("click", function(event){
    event.preventDefault();
    //console.log("CLICK!!");
    const courses = document.querySelector('#courses');
    const input = document.createElement('input');
    input.classList.add("form-control","mt-4", "input_certificate");
    input.type = "text";
    input.textContent = 'Certificates';
    input.placeholder =  'https://www.linkedin.com/in/foo-bar-3a0560104/';
    input.setAttribute("id", "element-`${i++}`");
    courses.appendChild(input);    
    console.log(input)

    var limit = 4;
    const contDiv = document.getElementsByClassName('input_certificate').length;
    contDiv>=limit ? button.disabled = 'true' : '';
  });

buttonX.addEventListener("click", function(e){
  console.log(e.target);

});