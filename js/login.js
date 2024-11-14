var kk = true
var ans = []
//   window.check_out = false





document.querySelector("#login").addEventListener("submit", (h) => {
    h.preventDefault();


    var loginemail = document.getElementById("loginemail").value
    var loginpass = document.getElementById("loginpassword").value

    kk = true
    document.querySelector("#loginpasstext").innerHTML = ""
    document.querySelector("#loginemailtext").innerHTML = ""


    if (loginemail.length == 0) {
        document.querySelector("#loginemailtext").innerHTML =
            "Plese Enter Valid Password";
        kk = false;

    }
    if (loginpass.length < 8) {
        document.querySelector("#loginpasstext").innerHTML = "Plese Enter Valid Password";
        kk = false;

    }

    if(kk == true)
    {
        fetch(`https://jioapi-ppe7.onrender.com/lg_data`)
        .then((re)=>{
            return re.json()
        }).then((res)=>{
            console.log(res);
            getdata(res)
        }).catch((err)=>{
            console.log(err);
        })
    }
   

    if (kk == true) {
        function getdata(arr){
            ans = arr.filter((el)=>{
                if(loginemail == el.email && loginpass == el.pass)
                {
                    return el
                }
             })
            if (ans.length > 0) {
            
                Swal.fire({
                    title: "Log In Successful...!",
                    text: "You clicked the button!",
                    icon: "success"
                });

                // check_out = true;






            } else {
                Swal.fire({
                    icon: "error",
                    title: "Log In Failed...",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                })
                check_out = false;


            }
        }


        
    }

    
})



// document.getElementById("check_on").addEventListener("click",()=>{
//     if(check_out == true){
//         alert("GO TO PAYMENT")
//     }
//     else{
//         alert("First LOGIN NOW")
//     }
// })


