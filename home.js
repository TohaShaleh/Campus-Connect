var navlinks=document.getElementById("navlinks");
        function showmenu(){
            navlinks.style.right="0";
        }
        function hidemenu(){
            navlinks.style.right="-200px";
        }



        var a = document.querySelector("#hm").textContent;  
        var b = a.slice("");  
        var c = "";  
        var i = 0;  
        
        // Set an interval to run every 200 milliseconds
        var st = setInterval(() => {

            if (i < b.length) {
                c += b[i];  
                document.querySelector("#hm").innerHTML = c;  
                i++;  // Move to the next character
            } 
            else 
            {
                clearInterval(st);  // Stop the interval when all characters have been displayed
            }
        }, 50);


      document.querySelector("#tt").addEventListener("click",(event)=>{
        // event.preventDefault();

        window.open('https://www.youtube.com', '_blank'); // Open a new window

        // window.location.href = 'https://www.youtube.com'; // Redirect to Youtube
         

      })  
