

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting and reloading the page

    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;

    if(email && password)
        {
            if(password==localStorage.getItem(email))
                {
                    alert("You Don't Need to Sign Up..Already have Account!!")
                }
                else{
                    localStorage.setItem(email,password);
                    alert("Congratulations ! You have successfully Sign Up...")
                }
        }
    else
    {
        alert("Please fill up carefully with your email and password");
    }

    // alert("Congratulations ! You have successfully Sign Up...")
    
    var name=firstName+lastName;
    var pass=localStorage.getItem(email);

    // localStorage.clear();  --> To remove all key-value pairs from localStorage
    // This method removes everything stored in localStorage, so use it with caution.

    // localStorage.removeItem('key');
    // Replace 'key' with the name of the item you want to remove.


    // Add some data to localStorage for demonstration
   localStorage.setItem('username', 'JohnDoe');
   localStorage.setItem('email', 'john.doe@example.com');

    // Remove a specific item
    localStorage.removeItem('username'); // Removes the 'username' key



    

});




function getcolor()
{
    let aa=()=> Math.floor(Math.random()*256);
    var color=`rgb(${aa()} , ${aa()} , ${aa()}`;
    return color;

}

document.querySelector("#st2").style.backgroundColor="white"; // set background color to white
let a = "Sign Up with your Name , Email and Password";
let b = "";
let i = 0;  // Counter for tracking the position in the string

let c = setInterval(() => {
    if (i < a.length) {
        let val = a[i];  // Get the current character
        let col=getcolor();
        b += `<span style="color:${col}">${val}</span>`;  // Append the character to the string `b`
        document.querySelector("#st2").innerHTML = b;  // Update the HTML element
        i++;  // Move to the next character
    } else {
        clearInterval(c);  // Stop the interval when the string is fully displayed
    }
}, 70);


