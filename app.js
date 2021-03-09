import React from react 

const myForm = getElementById("formulario");

var alert = document.getElementsById("error");
var card = document.getElementById("card").value;
var validationcvc = document.getElementById('validationcvc').value;
var amount = document.getElementById("amount").value;
var name = document.getElementById("name").value;
var Lastname = document.getElementById("Lastname").value;
var city = document.getElementById("city").value;
var stata = document.getElementById("Sate").value;
var zip = document.getElementById("zip").value;
var message = document.getElementById("message");
var checkbox = document.getElementsById("blankRadio1");

//form
divalert.style.textAlign = "center";
const myform = document.getElementById('myForm');
error.style.padding = "10px";


function validation(){ 

if(name.value == null || name.value.length == 0 || /^\s+$/.test(name.value)){
   name.style.backgroundColor = "#FF9595";
    
    divalert.style.backgroundColor = "#FF9595";
    divalert.innerHTML = "<p>field is missing</p>"
}

if (Lastname.value == null || Lastname.value.length == 0 || /^\s+$/.test(Lastname.value)){
   Lastname.style.backgroundColor = "#FF9595";
    DeviceAcceleration.innerHTML =  "<p>field is missing</p>"
  
}

if( card === ""){
  card.style.backgroundColor = "#FF9595";

    divalert.style.backgroundColor = "#FF9595";
    divalert.innerHTML.innerHTML =  "<p>field is missing</p>"
}

if(amount === ""){
amount.style.backgroundColor = "#FF9595";

    divalert.style.backgroundColor = "#FF9595";
    divalert.innerHTML.innerHTML =  "<p>field is missing</p>"
}

if (validationcvc === ""){
validationcvc.style.backgroundColor = "#FF9595";

    divalert.style.backgroundColor = "#FF9595";
    divalert.innerHTML.innerHTML =  "<p>field is missing</p>"
}

if(city.value == null || city.value.length == 0 || /^\s+$/.test(CustomElementRegistry.value)){
   city.style.backgroundColor = "#FF9595";
    
    divalert.style.backgroundColor = "#FF9595";
    divalert.innerHTML = "<p>field is missing</p>"
}

if(state.value == null || state.value.length == 0 || /^\s+$/.test(state.value)){
   state.style.backgroundColor = "#FF9595";
    
    divalert.style.backgroundColor = "#FF9595";
    divalert.innerHTML = "<p>field is missing</p>"
}

if(message.value == null || message.value.length == 0 || /^\s+$/.test(message.value)){
   message.style.backgroundColor = "#FF9595";
    
    divalert.style.backgroundColor = "#FF9595";
    divalert.innerHTML = "<p>field is missing</p>"
}

if (!(checkbox[0].checked || checkbox[1].checked) || checkbox[2].checked||checkbox[3].checked) {
    alert("Please Select typecard");
    return false;
};