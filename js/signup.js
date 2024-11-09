document.querySelector("#signup").addEventListener("submit", (e) => {
    e.preventDefault()

   

    var signupemail = document.querySelector("#email").value
    var signuppass = document.querySelector("#password").value

    var vailid = true 
    document.querySelector("#s2").innerHTML = ""
    document.querySelector("#s1").innerHTML = ""

    const emailRegex = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/;
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/


    if (emailRegex.test(signupemail) == false || signupemail.length == 0) {
        document.querySelector("#s2").innerHTML = "Wrong Email !";
        vailid = false;
    }
    if (signuppass.length < 8 || passRegex.test(signuppass) == false) {
        document.querySelector("#s1").innerHTML = "Your Password is week";
        vailid = false;
    }


    var obj = {
        email: signupemail,
        pass: signuppass,

                  
  
    };
  
    

    if (vailid == true) {

        // Swal.fire({
        //     title: "SignUp Success...",
        //     text: "You clicked the button!",
        //     icon: "success"
        //   });
        alert("Success..............")
    
       window.location.reload()

      

        fetch(`http://localhost:3000/lg_data`, {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
            .then((r) => {
                return r.json();
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })

  

    }


})