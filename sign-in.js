

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