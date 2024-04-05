



const wrapperStyle=`
    display:flex;   
    width:600px;
    box-shadow:2px 2px 20px 1px;
`

const formStyle=`
    display:flex;
    flex-direction:column;
    gap:20px;
    width:60%;
    padding:10px;
    box-sizing:border-box;
`

const formTitleStyle=`
    font-size:2rem;
    font-weight:bold;
    font-family:arial;
`

const infoStyle=`
    width:40%;
    padding:10px;
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
    gap:30px;
    background:rgb(214, 210, 88);
    color:white;
`

const formEmNamStyle=`
    display:flex;
    gap:10px;
`


const formItemInputSectionStyle=`
    display:flex;
    flex-direction:column;
    gap:20px;
    flex-grow:1;
`

const formItemInputWrapperStyle=`
    position:relative;
`


const infoItemIconStyle=`
    width:30px;
    height:20px;
    background:white;
`

const formItemInputStyle=`
    border-width:0px;
    width:100%;
    border-bottom:1px solid rgb(212, 209, 201);
    font-weight:bold;
    font-size:0.7rem;
    outline-width:0px;
`

const formItemNameStyle=`
    font-family:arial;
    font-weight:bold;
    text-transform:uppercase;
    font-size:0.8rem;
`

const formItemPlaceholderStyle=`
    color:rgb(212, 209, 201);
    font-family:arial;
    font-size:0.7rem;
    position:absolute;
    top:2px;
`

const submitStyle=`
    align-self:flex-start;
    padding:10px;
    cursor:pointer;
    border-width:0px;
    background:rgb(214, 210, 88);
    color:white
`



const infoTitleStyle=`
    font-family:arial;
    font-weight:bold;
    font-size:1.3rem;
`

const infoItemStyle=`
    display:flex;
`



function html(data){
    return `
        ${info(data)}
        ${form(data)}
    `
}


function info(data){
   return`
        <div style="${infoStyle}">
            <span style="${infoTitleStyle}" >Let's stay in touch</span>
            <span>We are open to any suggestion</span>
            ${infoItem(data.address||"14 Saint-Louis, NY, US", "/devspot/images/position-circle.svg", "Address")}
            ${infoItem(data.email||"dbs@mail.com", "/devspot/images/at-circle.svg", "Email")}
            ${infoItem(data.website||"www.dbs.net", "/devspot/images/heath-circle.svg", "Website")}
        </div>    
   `
}

function form(data){
    return`
        <form style="${formStyle}" action="${data.link||''}">
            <span style="${formTitleStyle}">Contact us</span>
            <div style="${formEmNamStyle}">
                ${formItem("Full Name", "Name", "text", "")}
                ${formItem("Email Address", "Email", "email", "")}
            </div>
            ${formItem("Subject", "Subject", "text", "")}
            ${formItem("Message", "Message", "", "textarea")}
            <input style="${submitStyle}" type="submit" value="Send Message">
        </form>
    `
}

function infoItem(infoItemData, infoItemUrl, infoItemName){
    return`
        <div style="${infoItemStyle}">
            <div style="mask:url(${infoItemUrl}) no-repeat center;${infoItemIconStyle}"></div>
            <span>${infoItemName+':'+infoItemData}</span>
        </div>
    `
}

function formItem(formItemName, formItemPlaceholder, formItemInputType, textArea){
    let input=``
    if(!textArea) input=`<input style="${formItemInputStyle}" type="${formItemInputType}" name="${formItemPlaceholder}" ${formItemPlaceholder} required>`
    else input=`<textarea style="${formItemInputStyle}" name="${formItemPlaceholder}" required></textarea>`    
    return`
        <div style="${formItemInputSectionStyle}">
            <span style="${formItemNameStyle}">${formItemName}</span>
            <div style="${formItemInputWrapperStyle}">
                <span style="${formItemPlaceholderStyle}" ${formItemPlaceholder}>${formItemPlaceholder}</span>
                ${input}
            </div>
        </div>
    `
}



export default function(){
    document.querySelectorAll('contact-form-2').forEach(e => {
        const data = JSON.parse(e.getAttribute('data')||'{}')
        e.innerHTML=html(data)
        e.style=wrapperStyle
        e.querySelector('input[Name]').addEventListener('focusin',event =>{
            e.querySelector('span[Name]').style.display="none"
        })
        e.querySelector('input[Name]').addEventListener('focusout',event =>{
            if(event.target.value=="") e.querySelector('span[Name]').style.display="inline"
        })
        e.querySelector('input[Email]').addEventListener('focusin',event =>{
            e.querySelector('span[Email]').style.display="none"
        })
        e.querySelector('input[Email]').addEventListener('focusout',event =>{
            if(event.target.value=="") e.querySelector('span[Email]').style.display="inline"
        })
        e.querySelector('input[Subject]').addEventListener('focusin',event =>{
            e.querySelector('span[Subject]').style.display="none"
        })
        e.querySelector('input[Subject]').addEventListener('focusout',event =>{
            if(event.target.value=="") e.querySelector('span[Subject]').style.display="inline"
        })
        e.querySelector('textarea').addEventListener('focusin',event =>{
            e.querySelector('span[Message]').style.display="none"
        })
        e.querySelector('textarea').addEventListener('focusout',event =>{
            if(event.target.value=="") e.querySelector('span[Message]').style.display="block"
        })
    })
}


