
import style from "/lib/style.js"
import slideshow from "/lib/slideshow.js"




window.addEventListener("load", ()=>{

 /*slideshow*/

 document.querySelectorAll(".slideshow").forEach(item => {
  new slideshow(item)
 })

})


/*stlesheet*/

const sheet = new CSSStylesheet()
sheet.replaceSync(style)
document.adoptedStyleSheets.push(sheet)



