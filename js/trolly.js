fetch(`https://jioapi-ppe7.onrender.com/cart`)

    .then((r) => {
        return r.json();
    })
    .then((res) => {
        console.log(res);
         let ln= res.length
        // document.getElementById("lengt_c").innerHTML= ln
        document.getElementById("carr").innerHTML= ln
       
        // document.getElementById("ad").innerHTML = showw(res)

    })
    .catch((er) => {
        console.log(er);
    })



    