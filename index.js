const namecontainer = document.querySelector(".name")
const jobcontainer = document.querySelector(".jobtitle")
const designercontainer = document.querySelector(".designer")
const hicontainer = document.querySelector(".text")
const ptitlecontainer = document.querySelector(".projectstitle")
const phonecontainer1 = document.querySelector("#phone1")
const phonecontainer2 = document.querySelector("#phone2")
const phonecontainer3 = document.querySelector("#phone3")





window.addEventListener("scroll", () => {
    console.log(window.scrollY)
    let offsetY = window.scrollY
    console.log(window.innerWidth)
if(window.innerWidth >= "650"){

    namecontainer.style.transform = `translateX(${offsetY*0.1}px)`
    
    jobcontainer.style.transform = `translateX(${-offsetY*0.2}px)`

    designercontainer.style.transform = `translateX(${offsetY*0.3}px)`

    hicontainer.style.transform = `translateX(${-offsetY*0.1}px)`

    

    ptitlecontainer.style.transform = `translateX(${(offsetY - 3750) *0.5}px)`

    phonecontainer1.style.transform = `translateX(${-(offsetY-3750)*0.5}px)`

    
    phonecontainer2.style.transform = `translateX(${-(offsetY-3750)*0.5}px)`


    phonecontainer3.style.transform = `translateX(${-(offsetY-3750)*0.5}px)`

}
    

    if(window.innerWidth <= "650px"){


    

    }


    
})