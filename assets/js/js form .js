
/**/
function printError(id, text) {
    document.getElementById(id).innerHTML =text ;
}

function Validate() {
    var fname = document.jsform.fname.value;
    var eid =document.jsform.eid.value;
    var surname=document.jsform.surname.value;
    var digits =document.jsform.digits.value;
    var education = document.jsform.education.value;
    var hobbies = document.jsform.hobbies.value;
    var tarea = document.jsform.tarea.value;
 
   var fnameerr = eiderr = surnameerr = selecterr = hobbyerr = true;
    
if(fname == "") {
    printError("fnameerr", "Please enter your first name");
} else {
    var regex = /^[a-zA-Z\s]+$/;                
    if(regex.test(fname) === false) {
        printError("fnameerr", "Please enter a valid name");
    }
}
if(eid == "") {
    printError("eiderr", "Please enter your email address");
} else {
    var regex= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(regex.test(eid) === false) {
        printError("eiderr", "Please enter a valid email address");
    }
}

if(surname == "") {
    printError("surnameerr", "Please enter your last name");
} else {
    var regex = /^[a-zA-Z\s]+$/;                
    if(regex.test(surname) === false) {
        printError("surnameerr", "Please enter a valid name");
}
}

if(digits == "") {
    printError("conerr", "Please enter Contact number");
}else{
    var pattern = /^[0-9]*$/;
    if(pattern.test(digits)===false){
        printError("conerr", "Please enter a valid Contact number");   
    }
}

if(education =="Select Qualification") {
        printError("selecterr", "Please enter your Qualification");
} 

if(tarea=="") {
    printError("commenterr", "Please write your comment.");
}
}

function first(){
    document.getElementById("one").innerHTML = 
         document.getElementById("fname").value;
 }

 function second(){
    document.getElementById("three").innerHTML = 
         document.getElementById("eid").value;
 }
 function third(){
    document.getElementById("two").innerHTML = 
         document.getElementById("surname").value;
 }

 function four(){
    document.getElementById("four").innerHTML = 
         document.getElementById("digits").value;
 }

 function checkradio() {  
    var getSelectedValue = document.querySelector( 
        'input[name="gender"]:checked'); 
      
    if(getSelectedValue != null) {
        document.getElementById("output").innerHTML 
            = getSelectedValue.value 
            + ""; 
    } 
    else { 
        document.getElementById("wrong").innerHTML 
            = "Please select your gender."; 
    } 
} 


function checkbox() {  
    var getSelectedValue = document.querySelector( 
        'input[name="hobbies"]:checked'); 
      
    if(getSelectedValue != null) {
        document.getElementById("output1").innerHTML 
            = getSelectedValue.value 
            + ""; 
    } 
    else { 
        document.getElementById("wrong1").innerHTML 
            = "Please select your hobby."; 
    } 
   
} 
 

function five(){
    document.getElementById("five").innerHTML = 
         document.getElementById("education").value;
 }

 function six(){
    document.getElementById("six").innerHTML = 
         document.getElementById("tarea").value;
 }


function final(){
    checkbox();
    six();
    five();
    checkradio();
    four();
    third();
    second();
    first();
    Validate();
}
