let engergyCheckbox=document.querySelector("#energysymbols")
let energyContainer=document.querySelector(".energy-forms")
// function show and hidden energy container
let checkboxChecked=()=>{
if(engergyCheckbox.checked===true){
    energyContainer.classList.add("show")
}
else{
    energyContainer.classList.remove("show")
}
}
engergyCheckbox.addEventListener("click",checkboxChecked)
///

let imgContainer=document.querySelectorAll(".subsection");
let  layerDiv=document.querySelectorAll(".layer")
// console.log(imgContainer,layerDiv)
imgContainer.forEach((img)=>{
img.addEventListener("click",(e)=>{
   console.log(e.target.nextElementSibling)
e.target.nextElementSibling.classList.add("remove")

})
})