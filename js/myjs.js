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
        msg.innerHTML = "All Fields Are Required !" + " " + "<sapn class=\"far fa-frown\"></span";
        msg.style.backgroundColor = "#FAEEEE";
        msg.style.color = "#DF4930";
        msg.style.border = "1px solid #DF4930";
    }
    else if(userName.value.length<3){
        msg.innerHTML = "User Name is Very Short !" + " " + "<sapn class=\"far fa-frown\"></span";
        msg.style.backgroundColor = "#FAEEEE";
        msg.style.color = "#DF4930";
        msg.style.border = "1px solid #DF4930";
    }
    else if(userPass.value.length<8){
        msg.innerHTML = "Password is Very Short !" + " " + "<sapn class=\"far fa-frown\"></span";
        msg.style.backgroundColor = "#FAEEEE";
        msg.style.color = "#DF4930";
        msg.style.border = "1px solid #DF4930";
    }
    else if(userConfirm.value != userPass.value){
        msg.innerHTML = "Passwords Not Matched !" + " " + "<sapn class=\"far fa-frown\"></span";
        msg.style.backgroundColor = "#FAEEEE";
        msg.style.color = "#DF4930";
        msg.style.border = "1px solid #DF4930";
    }
    else{
        console.log(printValidate());
        msg.innerHTML = "You Are Welcome" + " " + "<sapn class=\"far fa-smile\"></span";
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
