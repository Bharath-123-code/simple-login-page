document.getElementById("Login").addEventListener('submit',function(e){
    e.preventDefault();
    let email=document.getElementById("mail-id").value;
    const users=JSON.parse(localStorage.getItem("users")) || [];
    const user=users.find(u=>u.email===email);
    if(user){
        alert("Successfully logged in "+(user.firstName.toUpperCase([0]) || "user"));
    }
    else{
        alert("You don't have account, Please register");
    }

});