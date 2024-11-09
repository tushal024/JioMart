
fetch(`http://localhost:3000/product`)
    .then((r) => {
        return r.json();
    })
    .then((res) => {
        console.log(res);
        document.getElementById(`sec-1`).innerHTML = view(res)

        // filter...........................................................................
        s12(res)
        s11(res)
        s10(res)
        s9(res)
        s8(res)
        s7(res)
        s6(res)
        s5(res)
        s4(res)
        s3(res)
        s2(res)
        s1(res)
        // .........................................................................................................

        // sort...........................................................................

        op1(res)

    })
    .catch((er) => {
        console.log(er);
    })



// filter part /////////////////////////////////////////////////////////////////////////

let shoes = document.getElementById("shoes")
let tsert = document.getElementById("tsert")
let Goggles = document.getElementById("Goggles")
let watches = document.getElementById("Watches")
let brand = document.getElementById("brand")
let brand1 = document.getElementById("brand1")
let brand2 = document.getElementById("brand2")
let under_price = document.getElementById("upp")
let under_price_1 = document.getElementById("upp1")
let c_black = document.getElementById("c_black")
let c_blue = document.getElementById("c_blue")
let c_red = document.getElementById("c_red")





// for Red Color..........................................................................................
function s12(arr) {
    c_red.addEventListener('change', function () {
        if (this.checked) {
            console.log("yes");

            let bb = arr.filter((el) => {
                return el.color == "red"
            })
            console.log(bb);
            document.getElementById(`sec-1`).innerHTML = view(bb)

        }
        else {
            console.log("no");
            window.location.reload
            document.getElementById(`sec-1`).innerHTML = view(arr)
        }

    })
}




// for Blue Color..........................................................................................
function s11(arr) {
    c_blue.addEventListener('change', function () {
        if (this.checked) {
            console.log("yes");

            let bb = arr.filter((el) => {
                return el.color == "blue"
            })
            console.log(bb);
            document.getElementById(`sec-1`).innerHTML = view(bb)

        }
        else {
            console.log("no");
            window.location.reload
            document.getElementById(`sec-1`).innerHTML = view(arr)
        }

    })
}



// for Black Color..........................................................................................
function s10(arr) {
    c_black.addEventListener('change', function () {
        if (this.checked) {
            console.log("yes");

            let bb = arr.filter((el) => {
                return el.color == "black"
            })
            console.log(bb);
            document.getElementById(`sec-1`).innerHTML = view(bb)

        }
        else {
            console.log("no");
            window.location.reload
            document.getElementById(`sec-1`).innerHTML = view(arr)
        }

    })
}


// for Under 1000 Price..........................................................................................
function s9(arr) {
    under_price_1.addEventListener('change', function () {
        if (this.checked) {
            console.log("yes");

            let bb = arr.filter((el) => {
                return el.price <1000
            })
            console.log(bb);
            document.getElementById(`sec-1`).innerHTML = view(bb)

        }
        else {
            console.log("no");
            window.location.reload
            document.getElementById(`sec-1`).innerHTML = view(arr)
        }

    })
}




// for Under 500 Price..........................................................................................
function s8(arr) {
    under_price.addEventListener('change', function () {
        if (this.checked) {
            console.log("yes");

            let bb = arr.filter((el) => {
                return el.price <500
            })
            console.log(bb);
            document.getElementById(`sec-1`).innerHTML = view(bb)

        }
        else {
            console.log("no");
            window.location.reload
            document.getElementById(`sec-1`).innerHTML = view(arr)
        }

    })
}




// for BRAND2..........................................................................................
function s7(arr) {
    brand2.addEventListener('change', function () {
        if (this.checked) {
            console.log("yes");

            let bb = arr.filter((el) => {
                return el.brand == "Sparx"
            })
            console.log(bb);
            document.getElementById(`sec-1`).innerHTML = view(bb)

        }
        else {
            console.log("no");
            window.location.reload
            document.getElementById(`sec-1`).innerHTML = view(arr)
        }

    })
}



// for BRAND1..........................................................................................
function s6(arr) {
    brand1.addEventListener('change', function () {
        if (this.checked) {
            console.log("yes");

            let bb = arr.filter((el) => {
                return el.brand == "EYEBOGLER"
            })
            console.log(bb);
            document.getElementById(`sec-1`).innerHTML = view(bb)

        }
        else {
            console.log("no");
            window.location.reload
            document.getElementById(`sec-1`).innerHTML = view(arr)
        }

    })
}


// for BRAND..........................................................................................
function s5(arr) {
    brand.addEventListener('change', function () {
        if (this.checked) {
            console.log("yes");

            let bb = arr.filter((el) => {
                return el.brand == "PIRASO"
            })
            console.log(bb);
            document.getElementById(`sec-1`).innerHTML = view(bb)

        }
        else {
            console.log("no");
            window.location.reload
            document.getElementById(`sec-1`).innerHTML = view(arr)
        }

    })
}


// for watches..........................................................................................

function s4(arr) {
    watches.addEventListener('change', function () {
        if (this.checked) {
            console.log("yes");

            let bb = arr.filter((el) => {
                return el.type == "watch"
            })
            console.log(bb);
            document.getElementById(`sec-1`).innerHTML = view(bb)

        }
        else {
            console.log("no");
            window.location.reload
            document.getElementById(`sec-1`).innerHTML = view(arr)
        }

    })
}

// for shoes..........................................................................................

function s1(arr) {
    shoes.addEventListener('change', function () {
        if (this.checked) {
            console.log("yes");

            let bb = arr.filter((el) => {
                return el.type == "shose"
            })
            console.log(bb);
            document.getElementById(`sec-1`).innerHTML = view(bb)

        }
        else {
            console.log("no");
            window.location.reload
            document.getElementById(`sec-1`).innerHTML = view(arr)
        }

    })
}

// for tsert..........................................................................................

function s2(arr) {
    tsert.addEventListener('change', function () {
        if (this.checked) {
            console.log("yes");

            let bb = arr.filter((el) => {
                return el.type == "t-shirt"
            })
            console.log(bb);
            document.getElementById(`sec-1`).innerHTML = view(bb)

        }
        else {
            console.log("no");
            window.location.reload
            document.getElementById(`sec-1`).innerHTML = view(arr)
        }

    })
}


// for Goggles..........................................................................................

function s3(arr) {
    Goggles.addEventListener('change', function () {
        if (this.checked) {
            console.log("yes");

            let bb = arr.filter((el) => {
                return el.type == "goggles"
            })
            console.log(bb);
            document.getElementById(`sec-1`).innerHTML = view(bb)

        }
        else {
            console.log("no");
            window.location.reload
            document.getElementById(`sec-1`).innerHTML = view(arr)
        }

    })
}


// ///////////////////////////////////////////////////////////////////////////////////////////////////////


// SORT.....///////////////////////////////////////////////////////////////////////////////////////////////////////

function op1(arr) {







    
    let opt1 = document.getElementById("opt")
    opt1.addEventListener("change", () => {

        let compare= opt1.value
        console.log(compare);
        

        if(compare== 'lh'){
            let anss = arr.sort((a, b) => {
                return a.price - b.price
            })
    
            document.getElementById(`sec-1`).innerHTML = view(anss)  
        }
        if(compare=='hl'){
            let anss = arr.sort((a, b) => {
                return b.price - a.price
            })
            console.log(anss);
    
            document.getElementById(`sec-1`).innerHTML = view(anss)
    
        }

        if(compare=='normal'){
            let anss = arr.sort((a, b) => {
                return a.id - b.id
            })
            console.log(anss);
    
            document.getElementById(`sec-1`).innerHTML = view(anss)
    
        }

    
    })



   

}
function view(arr) {
    return arr.map((el) => {
        return `
   
              <div id="pr1" class=" w-[300px] sm:w-[45%] sm:ms-[2.5%]   md:w-[32%] md:ms-[10px] h-[400px] relative p-[10px] rounded-[10px] mb-[10px]" style="border: 1px solid rgba(0, 0, 0, 0.226);">
              <i class="fa-regular fa-heart absolute right-[9%] text-[#DFDCD9] top-[5%] text-[24px]"></i>
            <div id="pr_img" class="h-[70%] rounded-[10px] w-[90%] ms-[5%] border " >  <a href="single_pr.html?id=${el.id}"> <img src="${el.img}" class=" rounded-[10px]  h-[100%] w-[100%] "> </div>
    
            <div id="pr_text" class="h-[25%] pt-[20px]" >
                <p class="mb-[0px] text-[15px]">${el.des}</p>
                <span class="font-[600] text-[18px]">₹ ${el.price}      </span>

                <span id="line" class="text-[14px]">${el.n_price}</span>
                <span   class="w-[auto] ms-[10px] mt-[7px] mb-[7px] text-[14px] font-[500] inline-block  ps-[8px] pe-[8px] "  style="background-color: #d5f8e6;"         >  ${el.discount} % Off</span>
                
            </div>
        </div></a>

            `
    }).join("")
}




// resposive........................................


