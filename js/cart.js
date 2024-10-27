fetch(`http://localhost:3000/cart`)
    .then((r) => {
        return r.json();
    })
    .then((res) => {
        console.log(res);
         let ln= res.length
        document.getElementById("lengt_c").innerHTML= ln
        document.getElementById("carr").innerHTML= ln
       
        document.getElementById("ad").innerHTML = showw(res)

    })
    .catch((er) => {
        console.log(er);

    })



function showw(arr) {
    let a=0;
    return arr.map((el) => {


        a = a+  el.price* el.quenty


       let ts= (a*8)/100


       let fb= a-ts
let benefit= a-ts
       
        console.log(a);
        document.getElementById("total_pr").innerHTML= `₹${a}.00`
        document.getElementById("dc_price").innerHTML= `₹${a}.00`

        document.getElementById("discount_fn").innerHTML= `₹${ts}.00`
         document.getElementById("fainal_bill").innerHTML= `₹${fb}.00`
         document.getElementById("beni").innerHTML= `₹${benefit}`

        
        return `
            <div id="cart1" class="w-[100%] h-[auto]  mb-[20px]" style="border: px solid black;">

            <div id="cr1" class="w-[100%] h-[80%] flex" style="border: px solid black;">
                <div id="cr_img" class="w-[25%] h-[100%] pt-[7%] flex justify-center items-center" style="border: px solid black;">
                    <img src="${el.img}" alt="" width="65%" height="60%">
                </div>
                <div id="cr_tex" class="w-[85%] h-[100%] pt-[3%]" style="border: px solid black;">
                    <p class="text-[16px] ">${el.des}</p>
                    <span class="text-[19px] font-[700] ">₹${el.price*el.quenty}.00</span> <span style="text-decoration: line-through; opacity: 0.5;">  ₹14000</span>
<br>
                    <p style="background-color: #d5f8e6;" class="w-[auto] mt-[7px] mb-[7px] text-[15px] font-[700] inline-block">You Save ₹7,120.00</p>
<br>
                    <span class="text-[16px] opacity-[0.8]">Sold by: </span> <span class="text-[15px] ms-[5px] font-[500]">A SQUARE CREATION</span>
                    <br>
                    <span class="text-[16px] opacity-[0.8]">Colour: </span> <span class="text-[15px] ms-[5px] font-[500]"> Black</span>
                    <br>
                    <span class="text-[16px] opacity-[0.8]">Size: </span> <span class="text-[15px] ms-[5px] font-[500]">One Size

                    </span>


                </div>
            </div>
            <div id="cr2" class="w-[100%] h-[20%] flex justify-end items-center" style="border: px solid black;">
                <div id="d_i " class="w-[120px] h-[85%] me-[4%] flex justify-center items-center " style=" border: px solid black;">
                    <div id="dec" onclick="inc(${el.quenty},${el.id},'remove')"  class="w-[30%] h-[100%] flex justify-center items-center" style=" border: px solid black;">
                        <i class="fa-solid fa-minus text-[16px] rounded-[50%] p-[5px]" style="border: 1px solid black;"></i>
                    </div>
                    <div     id="inc" class="w-[30%] h-[100%]   flex justify-center items-center" style=" border: px solid black;">
                         
                        <input type="text" value="${el.quenty}" disabled   class="text-[20px] w-[10px]">
                    </div>
                    <div onclick="inc(${el.quenty},${el.id}, 'add')"   id="inc" class="w-[30%] h-[100%] flex justify-center items-center" style=" border: px solid black;">
                        <i class="fa-solid fa-plus text-[16px] rounded-[50%] p-[5px]" style="border: 1px solid black;"></i>
                    </div>
                </div>
                <button onclick="dd(${el.id})"> <i class="fa-regular fa-trash-can text-[20px] me-[50px]"></i></button>
            </div>
        </div>
        <hr class="w-[90%] m-[auto] mt-[10px]">
        `
    }).join("")
}



function inc(q, id, c) {
    
    let a = q
    if (c == 'remove') {
        a = a - 1

        if(a <= 0){
            fetch(`http://localhost:3000/cart/${id}`, {
                method: "DELETE",
            })
                .then((res) => {
                    return res.json();
                })

        }
    }
    else if (c == 'add') {
        a = a + 1
    }

    fetch(`http://localhost:3000/cart/${id}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ quenty: a })
    })
        .then((r) => {
            return r.json();
        })
        .then((res) => {
            console.log(res);
        })
        .catch((er) => {
            console.log(er);

        })
}

function dd(id) {

    fetch(`http://localhost:3000/cart/${id}`, {
        method: "DELETE",
    })
        .then((res) => {
            return res.json();
        })
}












