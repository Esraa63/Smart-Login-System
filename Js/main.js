var emailInput=document.getElementById("inputEmail");
var passwordInput=document.getElementById("inputPassword");
var users=[];
if(localStorage.getItem("users")!=null){
    users=JSON.parse(localStorage.getItem("users"));
}
console.log(users);

function checkData(){
    var user={
        email:emailInput.value,
        password:passwordInput.value
    }
    var msg=document.getElementById("msg");
    var isObjectPresent = users.find((user) => user.email === emailInput.value && user.password=== passwordInput.value);
    if(isObjectPresent!=undefined){
         clearForm();
         msg.classList.add("d-none");
         console.log(isObjectPresent.name);
         sessionStorage.setItem("name", isObjectPresent.name);
         window.location.href='home.html';
    }else{
        msg.classList.remove("d-none");
    }
     console.log(isObjectPresent);
}

function clearForm(){
    emailInput.value="";
    passwordInput.value="";
}