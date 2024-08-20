

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting and reloading the page

    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;
    
    const name=firstName+lastName;
    const pass=localStorage.getItem(email);
    if(pass===password)
        {
            alert('Congratulations ! You have Successfully Log in..');
        }
    else{
        alert("You Don't Have any Acconut , Please Sigb-Up First!!");
    }

     // localStorage.clear();  --> To remove all key-value pairs from localStorage
    // This method removes everything stored in localStorage, so use it with caution.

    // localStorage.removeItem('key');
    // Replace 'key' with the name of the item you want to remove.


});



function getcolor()
{
    let aa=()=> Math.floor(Math.random()*256);
    var color=`rgb(${aa()} , ${aa()} , ${aa()}`;
    return color;

}

document.querySelector("#st1").style.backgroundColor="white"; // set background color to white
let a = "Sign In With Your Email and Password";
let b = "";
let i = 0;  // Counter for tracking the position in the string

let c = setInterval(() => {
    if (i < a.length) {
        let val = a[i];  // Get the current character
        let col=getcolor();
        b += `<span style="color:${col}">${val}</span>`;  // Append the character to the string `b`
        document.querySelector("#st1").innerHTML = b;  // Update the HTML element
        i++;  // Move to the next character
    } else {
        clearInterval(c);  // Stop the interval when the string is fully displayed
    }
}, 70);
