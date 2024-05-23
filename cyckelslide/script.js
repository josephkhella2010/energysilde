let energyform=document.querySelector(".energyform")
let energySection=document.querySelector(".e-section")
let eSectionTwo=document.querySelector(".e-section-two")

// for(let i=0;i<10;i++){
//     let esymbol=document.createElement("div")
//     esymbol.className="e"
//     esymbol.innerHTML="E"
//     eSectionTwo.append(esymbol)

// }


var x = window.matchMedia("(max-width: 700px)")
var y = window.matchMedia("(min-width: 700px)")
if (x.matches) { // If media query matches
    for(let i=0;i<8;i++){
        let esymbol=document.createElement("div")
        esymbol.className="e"
        esymbol.innerHTML="E"
        eSectionTwo.append(esymbol)    
    }
  }  


  if (y.matches){
    for(let i=0;i<30;i++){
        let esymbol=document.createElement("div")
        esymbol.className="e"
        esymbol.innerHTML="E"
        eSectionTwo.append(esymbol)
    }
  }
 
energyform.addEventListener("click",(e)=>{
    if(energyform.checked===true){
        e.target.parentElement.nextElementSibling.classList.add("show")
        energySection.classList.add("show")
        eSectionTwo.classList.add("show")
    }
    if(energyform.checked===false){
        e.target.parentElement.nextElementSibling.classList.remove("show")
        energySection.classList.remove("show")
        eSectionTwo.classList.remove("show")
    }
})
let imgContainer=document.querySelectorAll(".subsection");
let  layerDiv=document.querySelectorAll(".layer")
let currentindex=1

layerDiv[0].classList.add("active")
let addclass = () => {
    removeclass()
    layerDiv[currentindex-1].classList.add("active")
}

let removeclass = () => {
    layerDiv.forEach((el) => {
        el.classList.remove("active")
    })
   
    }

let click = () => {
    layerDiv.forEach((el) => {
        el.addEventListener("click", (e) => {
            currentindex = parseInt(el.dataset.text)
            addclass()
        })

    })
}
click()
