

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting and reloading the page

    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;

    if(email && password)
        {
            localStorage.setItem(email,password);
        }
    else
    {
        alert("Please fill up carefully with your email and password");
    }

    alert("Congratulations ! You have successfully Sign Up...")
    
    var name=firstName+lastName;
    var pass=localStorage.getItem(email);
    

});