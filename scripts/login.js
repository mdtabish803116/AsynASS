
var userSignUp = JSON.parse(localStorage.getItem("userSignUp"));

if(userSignUp === null){
    localStorage.setItem("userSignUp" , JSON.stringify([]));
}


  document.getElementById("form").addEventListener("submit", function(e){
     e.preventDefault();

     var email = document.getElementById("email");
var password = document.getElementById("password");

    if(email.value == "" || password.value == ""){
        alert("Please Enter The Details Properly")
    }else { 
   var login = false;
userSignUp.forEach(function(user){
    if(user.email === email.value && user.password === password.value){
        login = true;
    }
})

      if(login){
           alert("You have logged in succesfully")
            window.location.href = "./index.html"
        }else {
          alert("Wrong username or password");
      }

   }

});