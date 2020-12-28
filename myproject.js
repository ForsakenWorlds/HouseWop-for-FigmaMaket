let lorem = document.forms.lorem;
let nameLorem = lorem.elements[0];
let telLorem = lorem.elements[1];


nameLorem.onfocus = function() {
    nameLorem.value = "";
}

nameLorem.onblur = function() {
    nameLorem.value = "Ваше имя";
}

telLorem.onfocus = function() {
    telLorem.value = "";
}

telLorem.onblur = function() {
    telLorem.value = "Ваш телефон";
}

nameLorem.oninput = function() {
    console.log(nameLorem.value)
}

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

nameQuestion.onfocus = function() {
    nameQuestion.value = "";
};

nameQuestion.onblur = function() {
    nameQuestion.value = "Ваше имя"
}

telQuestion.onfocus = function() {
    telQuestion.value = "";
};

telQuestion.onblur = function() {
    telQuestion.value = "Ваш телефон";
};


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