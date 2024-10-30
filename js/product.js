
fetch(`http://localhost:3000/product`)
    .then((r) => {
        return r.json();
    })
    .then((res) => {
        console.log(res);
        document.getElementById(`sec-1`).innerHTML = view(res)

        // filter...........................................................................

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
              <div id="pr1" class="md:w-[32%]  sm:w-[80%] w-[85%] sm:w-[100%]  h-[400px] relative p-[15px] rounded-[10px] mb-[10px]" style="border: 1px solid rgba(0, 0, 0, 0.226);">
              <i class="fa-regular fa-heart absolute right-[9%] text-[#DFDCD9] top-[5%] text-[24px]"></i>
            <div id="pr_img" class="h-[70%] w-[95%] " >  <a href="single_pr.html?id=${el.id}"> <img src="${el.img}" class=" rounded-[10px] ms-[2.5%]  h-[100%] w-[100%]"> </div>
    
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

