let lorem = document.forms.lorem;
let nameLorem = lorem.elements[0];
let telLorem = lorem.elements[1];



telLorem.oninput = function() {
    console.log(telLorem.value);
    if(!isFinite(telLorem.value)) {
        alert("Не похоже на телефонный номер");
        telLorem.value = "";
    }
}



let question = document.forms.question;
let nameQuestion = question.elements[0];
let telQuestion = question.elements[1];



nameQuestion.oninput = function() {
    console.log(nameQuestion.value)
}

telQuestion.oninput = function() {
    console.log(telQuestion.value)
    if(!isFinite(telQuestion.value)) {
        alert("Не похоже на телефон");
        telQuestion.value = "";
    }
}