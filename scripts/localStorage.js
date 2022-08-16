var personname = document.querySelector(".pname");
var personnick = document.querySelector(".pnick");
var personmail = document.querySelector(".pmail");
var personphone = document.querySelector(".pphone");
var personage = document.querySelector(".page");
var personlinked = document.querySelector(".plinked");
var persongit = document.querySelector(".pgit");
var personteam = document.querySelector("pteam");
var personinst = document.querySelector(".pinstitution");
var persongrad = document.querySelector(".pgraduation");

console.log(personname);


//save_localstorage();

get_localstorage();
//Obtain information from localstorage
function get_localstorage(){
    let data = JSON.parse(localStorage.getItem("data")); //key name
    /*var content = document.getElementsByClassName('modal-body');
    content.textContent = data;*/
    console.log( data );
}

function save_localstorage(){
    let person = {
        fullName:"Example Name",
        nickName:"Example Nickname",
        email: "foo@bar.com",
        phone: "(83) 00000-0000",
        birthday:{
            day:"",
            month:"",
            year:""
        },
        linkedin:"https://www.linkedin.com/in/foo-bar-3a0560104/",
        gitHub:"https://github.com/foobar",
        certificates:{
            course1:"",
            course2:"",
            course3:"",
            course4:"",
            course5:""
        },
        teamName:"Team Example",
        institution:"Universidade Federal da Paraíba",
        graduation: "Ciências da Computação"
    };

    personname.innerHTML = person.fullName; 
    personnick.innerHTML = person.nickName;
    personmail.innerHTML = person.email;
    personphone.innerHTML = person.phone;
    personage.innerHTML = person.birthday.day;
    personlinked.innerHTML = person.linkedin;
    persongit.innerHTML = person.gitHub;
    personteam.innerHTML = person.teamName;
    personinst.innerHTML = person.institution;
    persongrad.innerHTML = person.graduation;

    console.log("CHANGED"+personname);

    localStorage.setItem("data", JSON.stringify(person)); //key, value
}