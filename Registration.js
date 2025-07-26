document.getElementById("registration").addEventListener('submit',function(e){
    e.preventDefault();
    const firstName=document.getElementById("firstName").value.trim();
    const lastName=document.getElementById("lastName").value.trim();
    const email=document.getElementById("email").value.trim();

    let users=JSON.parse(localStorage.getItem("users")) || [];
    let existingUser=users.some(user=>user.email===email);
    if(existingUser){
         alert("User already exists");
         return;
    }
    const newUser={
        firstName:firstName,
        lastName:lastName,
        email:email,
    }
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("registered successfully");
    window.location.href="index.html";
});
