



/************css classes************/


const wrapperLayout=`
    width:300px;
    display:block;
`


const formLayout=`
    display:flex;
    flex-direction:column;
    gap:10px;
`

const titleLayout=`
    margin-bottom:20px;
`

const titleTheme=`
    font-family:arial;
    font-weight:bold;
    font-size:1.5rem;
`

const nameAreaLayout=`
    display:flex;
    padding:10px;
`

const emailAreaLayout=nameAreaLayout

const nameAreaTheme=`
    background:rgb(237, 234, 230);
    border-radius:20px;
`

const emailAreaTheme=nameAreaTheme

const nameIconTheme=`
    background:rgb(163, 161, 155);
    mask:url(/devspot/images/person.svg) no-repeat center;
`
const nameIconLayout=`
    width:20px;
    height:20px;
`
const emailIconLayout=nameIconLayout

const emailIconTheme=`
    background:rgb(156, 154, 152);
    mask:url(/devspot/images/enveloppe.svg) no-repeat center;
`

const inputNameTheme=`
    border-width:0px;
    background:transparent;
    color:rgb(156, 154, 152);
    font-family:arial;
    font-weight:bold;
    outline-width:0px;
`

const inputEmailTheme=inputNameTheme

const inputNameLayout=`
    flex-grow:1;
    height:20px;
`

const inputEmailLayout=inputNameLayout;

const textAreaTheme=`
    background:rgb(237, 234, 230);
    border-radius:10px;
    border-width:0px;
    font-family:arial;
    font-weight:bold;
    color:rgb(156, 154, 152);
    outline-width:0px;
`

const textAreaLayout=`
    height:90px;
    margin-bottom:20px;
    padding:10px;
`

const submitLayout=`
    padding:10px;
`

const submitTheme=`
    border-width:0px;
    color:white;
    font-weight:bold;
    background:rgb(86, 209, 201);
    border-radius:20px;
    cursor:pointer;
`

// const inputNamePlaceholderTheme=`
//     color:rgb(156, 154, 152);
// `

// const inputEmailPlaceholderTheme=inputNamePlaceholderTheme


function html(data){
    return `
        <form action="${data.link||''}" style="${formLayout}">
            <span style="${titleTheme}${titleLayout}">${data.title||'Get in touch'}</span>
            <div style="${nameAreaLayout}${nameAreaTheme}">
                <div style="${nameIconTheme}${nameIconLayout}"></div>
                <input type="text" placeholder="Name" style="${inputNameLayout}${inputNameTheme}" name="name" required>
            </div>
            <div style="${emailAreaLayout}${emailAreaTheme}">
                <div style="${emailIconTheme}${emailIconLayout}"></div>
                <input type="email" placeholder="Email" style="${inputEmailLayout}${inputEmailTheme}" name="email" required>
            </div>
            <textarea style="${textAreaTheme}${textAreaLayout}" name="message">Message</textarea>
            <input type="submit" value="Send" style="${submitLayout}${submitTheme}">
        </div>
    `
}



export default function(){
    const all = document.querySelectorAll('contact-form-1').forEach((e)=>{
        e.style=wrapperLayout
        const data = JSON.parse(e.getAttribute('data')||'{}')
        e.innerHTML=html(data)
    })
}



