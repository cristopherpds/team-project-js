const button = document.getElementById("morebtn");

button.addEventListener("click", function(event){
    event.preventDefault();
    //console.log("CLICK!!");
    const courses = document.querySelector('#courses');
    const input = document.createElement('input');
    input.classList.add("form-control","mt-4", "input_certificate");
    input.type = "text";
    input.textContent = 'Certificates';
    input.placeholder =  'https://www.linkedin.com/in/foo-bar-3a0560104/';	
    courses.appendChild(input);    

    var limit = 4;
    const contDiv = document.getElementsByClassName('input_certificate').length;
    contDiv>=limit ? button.disabled = 'true' : '';
  });
