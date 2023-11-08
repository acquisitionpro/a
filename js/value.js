const x2 = document.querySelector(".x2");
const num = document.querySelector(".num")

let numval= num.value 
let x2val = x2.value 
num.addEventListener("input", (e)=>{
 if(numval > 2){
     x2.value = e.target.num.value * 2
 }
}
)

