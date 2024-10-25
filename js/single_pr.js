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
            
            document.getElementById("add").addEventListener("click",()=>
                {
                    

                    add_TO_Cart(res,id)
                  })


        })
        .catch((er) => {
            console.log(er);

        })

}

function view(el) {
    return ` <div id="pr1" class="w-[32%] h-[500px]">
            <div id="pr_img" class="h-[80%] w-[100%]" style="border: 1px solid black;">  <img src="${el.img}" class="h-[100%] w-[100%]"> </div>
    
            <div id="pr_text" class="h-[20%]" style="border: 1px solid black;">
                <p class="mb-[10px]">${el.des}</p>
                <p>₹ ${el.price}  <span id="line">${el.n_price}</span>    <span class="ms-[10px]">  ${el.discount} % Off</span></p>
                <button id="add">ADD TO CART</button>
            </div>
        </div>`
}

fun()

function add_TO_Cart(add,id) {




fetch(`http://localhost:3000/cart?id=${add[0].id}`)

.then((r)=>{
    return r.json();
})
.then((add)=>{
    if(add.length>0){
        alert("noooooooooo")
    }
    else{
        
    fetch(`http://localhost:3000/cart`, {
        method: "POST",
        headers: {
            "content-type": "application/json"

        },
        body: JSON.stringify({...add,quenty:1})
    })


    }
})









}


