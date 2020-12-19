// Karam Hani Juda Zomlut
// All Variables
var userName = document.getElementById('name');
var userEmail = document.getElementById('email');
var userPass = document.getElementById('pass');
var userConfirm = document.getElementById('confirm');
var msg = document.getElementById('msg');
var eyePass = document.getElementById('showPass');
var eyeConf = document.getElementById('showConf');
// Print Name Function
function printName() {
    var myName = "Karam";
    return myName.toUpperCase();
}
// Validate Data Function
function printValidate(){
    return "======= User Info =======" + "\n" +
    "User Name: " + userName.value + "\n" +
    "Password: " + userPass.value + "\n" +
    "Email Address: " + userEmail.value;
}
// Print Info Function
function printInfo(){
    // Print Name.
    for(i=0;i<=10;i++){
        console.log(i,printName());
    }
    // Validation Form.
    if(userName.value == "" || userPass.value == "" || userEmail.value == "" || userConfirm.value == ""){
        msg.innerHTML = "<sapn class=\"fas fa-times-circle\"></sapn>" + " " +"All Fields Are Required!";
        msg.style.backgroundColor = "#FAEEEE";
        msg.style.color = "#DF4930";
        msg.style.border = "1px solid #DF4930";
    }
    else if(userName.value.length<3){
        msg.innerHTML = "<sapn class=\"fas fa-exclamation-circle\"></sapn>" + " " +"Warning! User Name is Very Short.";
        msg.style.backgroundColor = "#FFF8E4";
        msg.style.color = "#FFC000";
        msg.style.border = "1px solid #FFC000";
    }
    else if(userPass.value.length<8){
        msg.innerHTML = "<sapn class=\"fas fa-exclamation-circle\"></sapn>" + " " + "Warning! Password is Very Short.";
        msg.style.backgroundColor = "#FFF8E4";
        msg.style.color = "#FFC000";
        msg.style.border = "1px solid #FFC000";
    }
    else if(userConfirm.value != userPass.value){
        msg.innerHTML = "<sapn class=\"fas fa-times-circle\"></sapn>" + " " + "Passwords Not Matched !";
        msg.style.backgroundColor = "#FAEEEE";
        msg.style.color = "#DF4930";
        msg.style.border = "1px solid #DF4930";
    }
    else{
        console.log(printValidate());
        msg.innerHTML = "<sapn class=\"fas fa-check-circle\"></sapn>" + " " + "You Are Welcome";
        msg.style.backgroundColor = "#E8F9F1";
        msg.style.color = "#2ECE33";
        msg.style.border = "1px solid #2ECE33";
    }
}
// Show Password Function:
function showPass(){
    if(userPass.type === "password"){
        userPass.type = "text";
        eyePass.style.color = "#0082BF";
    }
    else{
        userPass.type = "password";
        eyePass.style.color = "#DF4930";
    }
}
// Show Confirm Passwrod Function:
function showConfirm(){
    if(userConfirm.type === "password"){
        userConfirm.type = "text";
        eyeConf.style.color = "#0082BF";
    }
    else{
        userConfirm.type = "password";
        eyeConf.style.color = "#DF4930";
    }
}
