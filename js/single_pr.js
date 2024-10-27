function fun() {


    let data = new URLSearchParams(window.location.search)
    let id = data.get("id")
    console.log(id);


    fetch(`http://localhost:3000/product/${id}`)
        .then((r) => {
            return r.json();
        })
        .then((res) => {
            document.getElementById("mm").innerHTML = view(res);
            // console.log(res);
            console.log(res.length);
            console.log(res);
            
            
            document.getElementById("add").addEventListener("click",()=>
                {
                    

                    add_TO_Cart(res)
                  })


        })
        .catch((er) => {
            console.log(er);

        })

}

function view(el) {
    return `
    
        <div id="product" class="w-[80%] h-[782px] ml-[120px] mt-[10px]" style="display: flex; justify-content: space-evenly;">
            <div id="1" class="w-[7%] h-[300px]" style="display: flex; flex-direction: column; justify-content: space-evenly;">
                <div id="sub-1" class="w-[100%] h-[80px]" style=" border-radius: 10px;"></div>
                <div id="sub-1-2" class="w-[100%] h-[80px]" style="border-radius: 10px;"></div>
                <div id="sub-1-3" class="w-[100%] h-[80px]" style=" border-radius: 10px;"></div>
            </div>
            <div id="2" class="w-[35%] h-[500px]" style="border-radius: 5px;">
                    <div id="sub-2" class="w-[100%] h-[500px]" style="border-radius: 10px;">
                    <img src="${el.img}" class="w-[100%] h-[500px]">
                    </div>
                <button id="add"  >Add to Cart</button>
            </div>
            <div id="3" class="w-[50%] h-[782px]" style="">
                    <div id="sub-3" class="w-[100%] h-[180px]" style="border: 1px solid rgb(205, 198, 198); border-top: none; border-left: none; border-right: none;">
                     <p id="P2">BULLMER</p>
                     <h1 id="H1">${el.des}</h1>
                     <span id="S1"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i><i class="fa-regular fa-star"></i> <span id="S4">454</span> <span id="S5"><i class="fa-regular fa-heart"></i> &nbsp; <i class="fa-solid fa-share-nodes"></i></span></span>
                     <h1 id="H2">₹ ${el.price}.00   <span id="S2"> ${el.discount}% off</span></h1>
                     <p id="P3">M.R.P: <span id="S3">₹${el.n_price}.00</span> (Incl. of all taxes)</p>
                    </div>
                 <div id="sub-3-1" class="w-[100%] h-[120px]" style="border: 1px solid rgb(205, 198, 198); border-top: none; border-left: none; border-right: none;">
                    <h1 id="H3">Colour</h1>
                    <div id="sub-3-1/1" class="w-[180px] h-[50px]" style=" display: flex; justify-content: space-evenly; align-items: center;">
                            <div id="ro1" class="w-[48px] h-[40px]" style="border: 1px solid black; border-radius: 10px; display: flex; justify-content: center; align-items: center;">
                                    <div id="ro-1" class="w-[20px] h-[20px]" style="background-color: #f0d9b0; border-radius: 50%;"></div>
                            </div>
                            <div id="ro1" class="w-[48px] h-[40px]" style="border: 1px solid black; border-radius: 10px; display: flex; justify-content: center; align-items: center;">
                                <div id="ro-2" class="w-[20px] h-[20px]" style="background-color: black; border-radius: 50%;"></div>
                            </div>
                            <div id="ro1" class="w-[48px] h-[40px]" style="border: 1px solid black; border-radius: 10px; display: flex; justify-content: center; align-items: center;">
                                <div id="ro-3" class="w-[20px] h-[20px]" style="background-color: blue; border-radius: 50%;"></div>
                            </div>
                    </div>
                 </div>
                 <div id="sub-3-2" class="w-[100%] h-[100px]" style="border: 1px solid rgb(205, 198, 198); border-top: none; border-left: none; border-right: none;">
                        <h1 id="H4">Size</h1>
                        <div id="size" class="w-[200px] h-[50px]" style=" display: flex; justify-content: space-evenly;  align-items: center;">
                            <div id="si1" class="w-[39px] h-[26px]" style="border: 1px solid black; border-radius: 20px; text-align: center;"><b>S</b></div>
                            <div id="si1" class="w-[39px] h-[26px]" style="border: 1px solid black; border-radius: 20px; text-align: center;"><b>M</b></div>
                            <div id="si1" class="w-[39px] h-[26px]" style="border: 1px solid black; border-radius: 20px; text-align: center;"><b>L</b></div>
                            <div id="si1" class="w-[39px] h-[26px]" style="border: 1px solid black; border-radius: 20px; text-align: center;"><b>XL</b></div>
                        </div>
                 </div>
                 <div id="sub-3-3" class="w-[100%] h-[170px]" style="border: 1px solid rgb(205, 198, 198); border-top: none; border-left: none; border-right: none;">
                        <h1 id="H5">Offers (13)</h1>
                        <div id="of" class="w-[380px] h-[70px]" style="display: flex; justify-content: space-evenly; align-items: center;">
                       <div id="icon" class="w-[30px] h-[30px]" style=" display: flex; justify-content: center; align-items: center;"> 
                        <i class="fa-solid fa-building-columns" id="icon1"></i></div>
                        <div id="line"><p id="P4">BANK OFFERS</p>
                        <P id="P5">5 accelerated reward points by SBI cards (1.25%), 10 accelerated reward.... <i class="fa-solid fa-angle-right" id="icon2"></i></P>
                        <p id="P6">13 offer/s Available</p></div>
                        </div>
                        <button id="btn2">View All</button>
                 </div>
                 <div id="sub-3-4" class="w-[100%] h-[100px]" style="border: 1px solid rgb(205, 198, 198); border-top: none; border-left: none; border-right: none;">
                        <h1 id="H6">Return Policy</h1>
                        <p id="P7">Return and Refund - Please refer to the policy here.</p>
                 </div>
                 <div id="sub-3-4" class="w-[100%] h-[80px]" style="border: 1px solid rgb(205, 198, 198); border-top: none; border-left: none; border-right: none; border-bottom: none;">
                        <p id="P8">Article ID: RVLCZZ8KAO <i class="fa-solid fa-paste" id="icon3"></i></p>    
                 </div>
            </div>
        </div>    
    `
}

fun()

function add_TO_Cart(res) {

    fetch( `http://localhost:3000/cart?id=${res.id}`)
    .then((r)=>{
        return r.json();

    })
    .then((Res)=>{
        console.log(Res);
        if(Res.length>0){

            alert("noooooooooooo")
        }
        else{

            fetch(`http://localhost:3000/cart`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
        
                },
                body: JSON.stringify({...res,quenty:1})
            })
            .then((r)=>{
                return r.json();
            })
            .then((res)=>{
                alert("ssssssssssssssssss")
            })
        
        }

        
    })
    .catch((er)=>{
        console.log(er);
        
    })

   


}