//Populate <options> of the select element.
  
//YEAR
var selectBox = document.getElementById('year');
console.log(selectBox);
// loop through years
for (var i = 2022; i >= 1940; i--) {
    // create option element
    createOption(); 
}

var selectedValue;
        function getSelectValue(){
            selectedValue = document.getElementById("year").value;
            console.log(selectedValue);
            //document.getElementById("age").innerHTML = "You selected: " + selectedValue;
        age();
        }

//DAY
var selectBox = document.getElementById('day');
// loop through years

  for (var i = 1; i <= 31; i++) {
    // create option element
    createOption();
  }
  var selectedDay;
  //get selected value
  function getSelectDay(e){
    //console.log(e);
    selectedDay = document.getElementById("day").value;
    console.log(selectedDay);
    //document.getElementById("age").innerHTML = "You selected: " + selectedMonth;
    age();
}

//MONTH
var selectBox = document.getElementById('month');
// loop through years
for (var i = 1; i <= 12; i++) {
    // create option element
    createOption();  
}

//Get selected value
var selectedMonth;
function getSelectMonth(){
    selectedMonth = document.getElementById("month").value;
    console.log(selectedMonth);
    //document.getElementById("age").innerHTML = "You selected: " + selectedMonth;
    age();
}

//Populate option element
function createOption(){
    var option = document.createElement('option');
        // add value and text name
        option.value = i;
        option.innerHTML = i;
        // add the option element to the selectbox
        selectBox.appendChild(option);
  }

//AGE CALCULATOR

function age() {
    
    var d1 = document.getElementById('day').value;
    //console.log("d1 "+d1);
    var m1 = document.getElementById('month').value;
    //console.log("m1 "+m1);
    var y1 = document.getElementById('year').value;
    //console.log("y1 "+y1);

    if( d1!= -1 && m1 != -1 && y1 != -1){

        var date = new Date();
        var d2 = date.getDate();
        var m2 = 1 + date.getMonth();
        var y2 = date.getFullYear();
    
        var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
        if(d1 > d2){
            d2 = d2 + month[m2 - 1];
            m2 = m2 - 1;
        }
    
        if(m1 > m2){
            m2 = m2 + 12;
            y2 = y2 - 1;
        }
    
        var d = d2 - d1;
        var m = m2 - m1;
        var y = y2 - y1;
    
        document.getElementById('age').value = y;

    }else{

        document.getElementById('age').value = 0;

    }

  
}
