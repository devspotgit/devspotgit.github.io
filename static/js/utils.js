


window.addEventListener("load",()=>{

    window.addEventListener("click", (e)=>{
        if(document.querySelector("#menu") == e.target){
            document.querySelector(".side").setAttribute("open","")
        }
        else if(! document.querySelector(".side").contains(e.target)){
            if(document.querySelector(".side").hasAttribute("open")) document.querySelector(".side").removeAttribute("open")
        }
    })

})







