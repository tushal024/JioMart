
fetch(`http://localhost:3000/product`)
    .then((r) => {
        return r.json();
    })
    .then((res) => {
        
        let shoes_arr=shoes1(res)
        
        console.log(res);
        document.getElementById(`sec-1`).innerHTML = view(res)

        let zid= fil(res)
        console.log(zid.length);

// shoes.......................................................................................................

let shoes=document.getElementById("shoes")

shoes.addEventListener('change',function(){
    if(this.checked){
        console.log("yes");
    //    console.log(shoes1(res));
        console.log(shoes_arr);

        shoes_arr.map((el)=>{
            console.log(el.price);
            document.getElementById("sec-1").innerHTML=`<h1>${el.price}</h1>`
            
        })
        
  
    }
    else{
        console.log("no");
        
    }

})





        // 400 up...................................................................................................
        let a = document.getElementById("up")
        a.addEventListener('change', function () {
            
            if (this.checked) {
                console.log("check.........!");
                // document.getElementById("sec-1").innerHTML = fil(res)
                console.log(zid[6]);
                for(let x=6;x<zid.length;x++){
                    
                    document.getElementById(`sec-${x}`).innerHTML =` <div id="pr1" class="w-[300px] ms-[5px] h-[400px] relative p-[15px]  rounded-[10px] mb-[10px]" style="border: 1px solid rgba(0, 0, 0, 0.226);">
                    <i class="fa-regular fa-heart absolute right-[9%] text-[#DFDCD9] top-[5%] text-[24px]"></i>
                  <div id="pr_img" class="h-[70%] w-[95%] " >  <a href="single_pr.html?id=${zid[x].id}"> <img src="${zid[x].img}" class=" rounded-[10px] ms-[2.5%]  h-[100%] w-[100%]"> </div>
        
                  <div id="pr_text" class="h-[25%] pt-[20px]" >
                      <p class="mb-[0px] text-[15px]">${zid[x].des}</p>
                      <span class="font-[600] text-[18px]">₹ ${zid[x].price}      </span>
        
                      <span id="line" class="text-[14px]">${zid[x].n_price}</span>
                      <span   class="w-[auto] ms-[10px] mt-[7px] mb-[7px] text-[14px] font-[500] inline-block  ps-[8px] pe-[8px] "  style="background-color: #d5f8e6;">  ${zid[x].discount} % Off</span>
        
                  </div>
              </div></a>`
        
                }     
            }
            else {
                console.log("Not Check............!");
                window.location.reload()
             

            }
        })


    })
    .catch((er) => {
        console.log(er);
    })





    function shoes1(arr){

        let sh=[]
        sh= arr.filter((el)=>{

            if(el.type=="shose"){
                return sh
            }
        })

        return sh;
        }


function fil(res) {
    let ar = [];
    ar = res.filter((el) => {
        if (el.price > 400) {
            console.log(el);
        
               return  ar
        }
    })
    console.log(ar);

    return ar;
    
}

// .....................................................................................................


function view(arr) {
    return arr.map((el) => {
        return `
              <div id="pr1" class="w-[32%] h-[400px] relative p-[15px] rounded-[10px] mb-[10px]" style="border: 1px solid rgba(0, 0, 0, 0.226);">
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




