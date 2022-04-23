
var userSignUp = JSON.parse(localStorage.getItem("userSignUp"));

if(userSignUp === null){
    localStorage.setItem("userSignUp",JSON.stringify([]));
}

    var usrName = document.getElementById("name");
    var contactNo = document.getElementById("contactNo");
    var password = document.getElementById("password");
    var email = document.getElementById("email");
document.getElementById("form").addEventListener("submit", function(e){
     e.preventDefault();

     if(usrName.value == "" || contactNo.value == "" || password.value == "" || email.value == ""){
        alert("Please Enter the Details properly")
     }else {  
     var userSignUp = JSON.parse(localStorage.getItem("userSignUp"));

     var checkAlready = true;
     for(var i = 0; i < userSignUp.length; i++){
         if(userSignUp[i].email == email.value){
              checkAlready = false;
              break;
         }
     }

       if(checkAlready){  
        alert("You have created the account succesfully")
     var userObj = {
            name : usrName.value,
            contactNo : contactNo.value,
            password : password.value,
            email : email.value,
     };

     userSignUp.push(userObj);
     localStorage.setItem("userSignUp" , JSON.stringify(userSignUp));
    //  alert("You have created the account succesfully")
    window.location.href = "./login.html";
    }else {
        alert("This Email is already registered");
    }

}
    
})
