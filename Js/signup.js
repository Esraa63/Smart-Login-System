var nameInput=document.getElementById("inputName");
var emailInput=document.getElementById("inputEmail");
var passwordInput=document.getElementById("inputPassword");
var users=[];

if(localStorage.getItem("users")!=null){
    users=JSON.parse(localStorage.getItem("users"));
}
console.log(users);
function addUser(){
    var user={
        name:nameInput.value,
        email:emailInput.value,
        password:passwordInput.value
    }
    var isObjectPresent = users.some((user) => user.email === emailInput.value);
    console.log(!isObjectPresent);
    var isExists=document.getElementById("isExists");
    if(regexName()==true&&regexEmail()==true&&regexPassword()==true){
       if(!isObjectPresent){
        users.push(user);
        localStorage.setItem("users",JSON.stringify(users));
        console.log(users);
        isExists.classList.add("d-none");
         clearForm();   
         window.location.href='index.html';
       }else{
       isExists.classList.remove("d-none");
       }
    }
   
}

function clearForm(){
    nameInput.value="";
    emailInput.value="";
    passwordInput.value="";
}

function regexName(){
    var regexName=/^[a-zA-Z][a-zA-Z0-9 ]{2,}$/;
    var textName=nameInput.value;
    var nameMsg=document.getElementById("nameMsg");
   if(regexName.test(textName)==true) {
    nameMsg.classList.add("d-none");
    return true;
   }else{
    nameMsg.classList.remove("d-none");
     return false;
   }
}

function regexEmail(){
    var regexEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var textEmail=emailInput.value;
    var emailMsg=document.getElementById("emailMsg");
    if(regexEmail.test(textEmail)==true){

        emailMsg.classList.add("d-none");
        return true;
    }else{
        emailMsg.classList.remove("d-none");
        return false;
    }
}

function regexPassword(){
    var regexPassword=/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    var textPassword=passwordInput.value;
    var passMsg=document.getElementById("passMsg");
    if(regexPassword.test(textPassword)==true){
        passMsg.classList.add("d-none");
        return true;
    }else{
        passMsg.classList.remove("d-none");
        return false;
    }
}