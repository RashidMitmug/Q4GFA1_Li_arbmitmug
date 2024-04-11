
var aname;
var uname;
var pword;
var email;
var address;
var interests;
var gender;
var holder;
var id;
function namechanges(){
    holder = document.getElementById("aname").value;
    if (holder == ""){
        document.getElementById("aname").style.borderColor = "red";
    }
    else{
        document.getElementById("aname").style.borderColor = "green";
    }
}
function unamechanges(){
    holder = document.getElementById("Username").value;
    if (holder == ""){
        document.getElementById("Username").style.borderColor = "red";
    }
    else{
        document.getElementById("Username").style.borderColor = "green";
    }
}
function pwordchanges(){
    holder = document.getElementById("pWord").value;
    if (holder == ""){
        document.getElementById("pWord").style.borderColor = "red";
    }
    else{
        document.getElementById("pWord").style.borderColor = "green";
    }
}
function emailchanges(){
    holder = document.getElementById("email").value;
    if (holder == ""){
        document.getElementById("email").style.borderColor = "red";
    }
    else{
        document.getElementById("email").style.borderColor = "green";
    }
}
function addresschanges(){
    holder = document.getElementById("address").value;
    if (holder == ""){
        document.getElementById("address").style.borderColor = "red";
    }
    else{
        document.getElementById("address").style.borderColor = "green";
    }
}
function interestschanges(){
    holder = document.getElementById("interests").value;
    if (holder == ""){
        document.getElementById("interests").style.borderColor = "red";
    }
    else{
        document.getElementById("interests").style.borderColor = "green";
    }
}
function genderchanges(){
    holder = document.getElementById("Username").value;
    if (holder == ""){
        document.getElementById("Username").style.borderColor = "red";
    }
    else{
        document.getElementById("Username").style.borderColor = "green";
    }
}

function osubmit(){
    aname=document.getElementById("aname").value;
    uname=document.getElementById("Username").value;
    pword=document.getElementById("pWord").value;
    email=document.getElementById("email").value;
    address=document.getElementById("address").value;
    interests=document.getElementById("interests").value;
    gender=document.getElementById("gender").value;
   
    document.getElementById("outName").innerHTML="Name: "+aname;
    document.getElementById("outUsername").innerHTML="Userame: "+uname;
    document.getElementById("outPword").innerHTML="Password: "+pword;
    document.getElementById("outEmail").innerHTML="Email: "+email;
    document.getElementById("outAddress").innerHTML="Address: "+address;
    document.getElementById("outInterests").innerHTML="Interest/s: "+interests;
    document.getElementById("outGender").innerHTML="Gender: "+gender;
}

function oreset(){
    document.getElementById("aname").value="";
    document.getElementById("Username").value="";
    document.getElementById("pWord").value="";
    document.getElementById("email").value="";
    document.getElementById("address").value="";
    document.getElementById("interests").value="";
    document.getElementById("gender").value="";
}