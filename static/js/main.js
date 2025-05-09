



document.querySelector(".side-open").addEventListener("click", ()=>{
    document.querySelector(".side").style.left="0";
    document.querySelector(".transparent").style.display="initial";
})


document.querySelector(".side-close").addEventListener("click", ()=>{
    document.querySelector(".side").style.left="-250px";
    document.querySelector(".transparent").style.display="none";
})


document.querySelector(".transparent").addEventListener("click", ()=>{
    document.querySelector(".side").style.left="-250px";
    document.querySelector(".transparent").style.display="none";
})


