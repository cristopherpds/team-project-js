//save_localstorage();

get_localstorage();
//Obtain information from localstorage, "data" should be shown by the modal.
function get_localstorage(){
    let data = JSON.parse(localStorage.getItem("data")); //key name
    //var contet = document.getElementsByClassName('modal-body');
    //content.textContent = data;
    console.log( data );
}

function save_localstorage(){
    let person = {
        fullName:"Foo Bar",
        nickName:"Juanito",
        email: "foo@bar.com",
        phone: "(83) 00000-0000",
        birthday:{
            day:"",
            month:"",
            year:""
        },
        linkedin:"",
        gitHub:"",
        certificates:{
            course1:"",
            course2:"",
            course3:"",
            course4:"",
            course5:""
        },
        teamName:"",
        institution:"",
        graduation: ""
    };

    localStorage.setItem("data", JSON.stringify(person)); //key, value
}