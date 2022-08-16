var fullname = document.getElementById('fullname');
var email = document.getElementById('email');

var nextBasicBtn = document.getElementById('nextBasicBtn');
var nextSocialBtn = document.getElementById('nextSocialBtn');
var flagProgress = 1

const validateName = (fullname) => {
    const regex = /^[a-z-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ,',-]+(\s)[a-z-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ,',-]+$/i;
    return regex.test(fullname);
}

const validateEmail = (email) => {
    const regex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    return regex.test(email.toLowerCase());
}

const validadePhone = (phone) => {
    const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    return regex.test(phone);
}

const validateBirthday = (birthday) => {
    const regex = /(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})/;
    return regex.test(birthday);
}

const validateGithub = (github) => {
    const regex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
    return regex.test(github);
}

const validadeTeamName = (teamname) => {
    const regex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
    return regex.test(teamname);
}

const validadeInstitution = (institution) => {
    const regex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
    return regex.test(institution);
}

const validadeGraduation = (graduation) => {
    const regex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
    return regex.test(graduation);
}


const validatorsBasic = (e) => {

    var day = document.querySelector("#day");
    var month = document.querySelector("#month");
    var year = document.querySelector("#year");
    var birthdaycon = `${day.value + '/' + month.value + '/' + year.value}`
    var age = document.getElementById('age');
    var fullname = document.querySelector("#fullname");
    var email = document.querySelector("#email");
    var checkbox = document.querySelector("#checkbox");
    if (validateName(fullname.value) && validateEmail(email.value) && validateBirthday(birthdaycon) && age.value >= 18 && checkbox.checked) {
        nextBasicBtn.classList.remove('disabled')
        flagProgress = 2
        // console.log(flagProgress)
    } else {
        nextBasicBtn.classList.add('disabled')
    }
}

const validatorsSocial = (e) => {
    var github = document.querySelector("#inputGithub")
    if (validateGithub(github.value)) {
        nextSocialBtn.classList.remove('disabled')
        flagProgress = 3
        // console.log(flagProgress)
    } else {
        nextSocialBtn.classList.add('disabled')
    }
}

const validatorsCertificates = (e) => {
    var teamname = document.querySelector("#inputTeamName")
    var institution = document.querySelector("#inputInstitution")
    var graduation = document.querySelector("#inputGraduation")
    if (validadeTeamName(teamname.value) && validadeInstitution(institution.value) && validadeGraduation(graduation.value)) {
        finishButton.classList.remove('disabled')
        flagProgress = 3
        //console.log(flagProgress)
    } else {
        finishButton.classList.add('disabled')
    }

}

document.addEventListener("DOMContentLoaded", function (e) {
    document.getElementById("form-basic").addEventListener("change", function () {
        validatorsBasic(e)
    });
    document.getElementById("form-social").addEventListener("change", function () {
        validatorsSocial(e)
    });
    document.getElementById("form-certificates").addEventListener("change", function () {
        validatorsCertificates(e)
    });
});