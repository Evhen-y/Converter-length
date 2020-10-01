// window.onload = function () {
var select = document.getElementById("select");
var select2 =document.getElementById("select2");

var input = document.getElementById("value");
var button = document.getElementById("generate");
var inputResult = document.getElementById("result");
var settingsWhell = document.getElementById("wheel");
var hiddenWindow = document.getElementById("hidden");
var applyBtn = document.getElementById("apply");
var langSelect = document.getElementById("lang");
var h2 = document.getElementById("h2");
var p = document.getElementById("p");
input.value = localStorage.getItem("input");

button.addEventListener("click", generateValue);
applyBtn.addEventListener("click", changeLang);
settingsWhell.addEventListener("click", hideWindow);

function generateValue(e) {

    var option = select.options[select.selectedIndex].text;
    var option2 = select2.options[select2.selectedIndex].text;
    localStorage.setItem('input', input.value);
    secondConvert(option, option2, input, inputResult);

}

var allConvertmeters = {
    meters:1,
    miles: 1609.34,
    yard: 0.9144,
    verset: 1066.8,
    foot: 0.3048
};
function converToMetr(option, input){
    var resMetr = input.value;
    return resMetr * allConvertmeters[option];
}

function secondConvert(option, option2, input, inputResult){

    var resMetr = converToMetr(option, input);

    inputResult.value = resMetr/allConvertmeters[option2];
}
//to test set arg hiddenWindow
function hideWindow() {
    hiddenWindow.classList.toggle("hidden");
}


var changeLangRu = {
    meters:"метры",
    miles: "мили",
    yard: "ярды",
    verset: "версты",
    foot: "футы",
    "متر":"метры",
    "ميل": "мили",
    "ياردة": "ярды",
    "ميل": "версты",
    "قدم": "футы"
};
var changeLangAr = {
    meters:"متر",
    miles: "ميل",
    yard: "ياردة",
    verset: "ميل",
    foot: "قدم",
    "метры":  "متر",
    "мили": "ميل",
    "ярды":  "ياردة",
    "версты":"ميل",
    "футы":"قدم"
};
function NewObjNotSelectItems(buttonGenerate, applyBtn, inputValue, inputResult, h2Text, pText){
    this.buttonGenerate = buttonGenerate;
    this.applyBtn = applyBtn;
    this.inputValue =inputValue;
    this.inputResult = inputResult;
    this.h2Text = h2Text;
    this.pText = pText;
}
var notSelectElemRU = new NewObjNotSelectItems("Сгенерировать", "Применить",
    "Введите число для конвертации", "Результат","Настройки", "Язык");

var notSelectElemAR = new NewObjNotSelectItems("توليد","للتقديم","أدخل الرقم للتحويل",
    "يؤدي", "إعدادات", "لغة");

function setTextValues(objValues, button, applyBtn, input, inputResult, h2, p){
    button.innerText = objValues.buttonGenerate;
    applyBtn.innerText = objValues.applyBtn;
    input.placeholder = objValues.inputValue;
    inputResult.placeholder = objValues.inputResult;
    h2.innerText = objValues.h2Text;
    p.innerText = objValues.pText;
}
//to test set arg : langSelect, select, select2, button, applyBtn, input, inputResult, h2, p, hiddenWindow
function changeLang() {
    var option = langSelect.options[langSelect.selectedIndex].text;

    if(option == "RU"){
        selectLang(select, changeLangRu);
        selectLang(select2, changeLangRu);
        setTextValues(notSelectElemRU, button, applyBtn, input, inputResult, h2, p);
        hiddenWindow.classList.toggle("hidden");
        document.body.classList.remove("direction");
    } else if(option == "AR"){
        document.body.classList.add("direction");
        selectLang(select, changeLangAr);
        selectLang(select2, changeLangAr);
        setTextValues(notSelectElemAR, button, applyBtn, input, inputResult, h2, p);
        hiddenWindow.classList.toggle("hidden")
    } else {
        document.location.reload()
    }
}
function selectLang(select, changeLang){
    for(var key in select.children){
        select.children[key].text = changeLang[select.children[key].text];
    }
}


