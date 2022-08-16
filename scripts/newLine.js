const button = document.getElementById("morebtn");
const buttonX = document.getElementById("buttonX");
const buttonH = document.getElementById("buttonH");
var counter = 1;



button.addEventListener("click", function (event) {
  addInput();
  //console.log("CLICK!!");
  // const courses = document.querySelector('#courses');
  // const input = document.createElement('input');
  // input.setAttribute("id", `element-${i++}`);
  // input.classList.add("form-control", "mt-4", "input_certificate");
  // input.type = "text";
  // input.textContent = 'Certificates';
  // input.placeholder = 'https://www.linkedin.com/in/foo-bar-3a0560104/';

  // courses.appendChild(input);
  // console.log()
  // var limit = 4;
  // const contDiv = document.getElementsByClassName('input_certificate').length;
  // contDiv >= limit ? button.disabled = 'true' : '';

});


function addInput() {
  if (counter <= 4) {
    const courses = document.querySelector("#courses");
    const div = document.createElement("div");
    div.setAttribute("id", `element-${i++}`);
    div.classList.add("d-flex", "div-position");
    const input = document.createElement("input");
    input.classList.add("form-control", "mt-4", "input_certificate");
    input.type = "text";
    input.textContent = 'Certificates';
    input.placeholder = 'https://www.linkedin.com/in/foo-bar-3a0560104/';
    const buttonX = document.createElement("img");
    buttonX.classList.add("button-icon2")
    buttonX.setAttribute("src", "style/images/x-circle.svg");
    
    const buttonH = document.createElement("img");
    buttonH.classList.add("button-icon");
    buttonH.setAttribute("src", "style/images/heart.svg");
    div.appendChild(input);
    div.appendChild(buttonX);
    div.appendChild(buttonH);
    courses.appendChild(div);
    counter++;
    buttonX.addEventListener("click", (e)=> {
      var fatherNode = e.target.parentNode;
      fatherNode.remove();
      counter--;
      // console.log(counter);
      button.disabled = false;
    });

    buttonH.addEventListener("click", (e)=> {
      var fatherNode = e.target.parentNode;
      fatherNode.insertbefore();
      // console.log(counter);
    });
  } else {
    button.disabled = true;
  }
  
}

function favorite(id) {
  
}
