// const { log } = require("console")

// dom method to select html element using id
document.getElementById("title").innerHTML = "Title From Script"


  
let res = document.getElementsByClassName("classValue")
//accessing elements with same class name
res[0].innerHTML = "sub heading from script"
res[1].innerHTML = "Script LInk"

let Tag = document.getElementsByTagName("h2")
console.log(Tag);
// select first element with classname text
document.querySelector(".text").innerHTML = "Updated Content"
// select all elements of a tag
//document.querySelectorAll("a").innerHTML = "updated Link"

//select all a tag with classname demo
let aTags = document.querySelectorAll("a.texts")

// selecting forms
// let forms = document.forms["form1"];
// // we can change attribute of a element
// document.getElementById("google").href = "https://www.google.com/"

// console.log(forms);

// console.log("//////////////////////////////////////////");

// console.log(forms[0]);

// console.log(forms[0].value);

console.log(aTags);

function registerValidation(){
    const fullName = document.forms["signup"]["fname"].value;
    const Email = document.forms["signup"]["email"].value;
    const password = document.forms["signup"]["password"].value
    const PhoneNumber = document.forms["signup"]["phoneNumber"].value
    var c  = true;
    if (fullName==null || fullName==""){
        alert('Please enter your full Name');
        document.getElementById("emptyName").innerHTML="Please Enter FullName"
        c =false
    }else{
        document.getElementById("emptyName").innerHTML=" "
    }
    if(Email == null || Email ==""){
        alert ('please provide email address') ;
        document.getElementById("emptyEmail").innerHTML = "Pleas enter Email"
        c = false
    }else{
        document.getElementById("emptyEmail").innerHTML = "";
    }
    if(password == null || password == ""){
        alert("please provide password")
        document.getElementById("emptyPassword").innerHTML = "Enter Password"
        c = false
    }else{
        document.getElementById("emptyPassword").innerHTML = ""
    }
    if(isNaN(PhoneNumber)){
        alert("provide a valid number")
    }
    if(!c){ 
        document.getElementById("Welcome").innerHTML = "" 
    }else{
        document.getElementById("Welcome").innerHTML = "Success" 
    }

   


    
    return false
    
}

document.getElementById("submit").style.color = "white";
document.getElementById("submit").style.background = "red";

function Clickme(){
    document.getElementById("change").innerHTML="p element is clicked"
}

function Mouseover(){
    document.getElementById("mouseover").innerHTML="GitHub"
}

//select using event

function ClickmeEvent(e) {
    e.target.innerHTML = "i have been clicked"
}

document.getElementById("clickEvent").addEventListener("click", ()=> {
    alert("hi how are you")
  });