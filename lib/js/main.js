

import {carousel} from "/lib/js/carousel.js"


window.addEventListener("load",()=>{

    document.querySelectorAll(".carousel").forEach(item => {
        carousel(item)
    })

})



