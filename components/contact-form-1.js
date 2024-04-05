



/************css classes************/


const wrapperStyle =`
    width:300px;
    display:block;
`


const formSectionStyle=`
    display:flex;
    flex-direction:column;
    gap:10px;
`

const titleStyle=`
    margin-bottom:20px;
    font-family:arial;
    font-weight:bold;
    font-size:1.5rem;
`


const nameSectionStyle=`
    display:flex;
    padding:10px;
    background:rgb(237, 234, 230);
    border-radius:20px;
`
const emailSectionStyle=nameSectionStyle


const nameInputSectionStyle=`
    position:relative;
`
const emailInputSectionStyle=nameInputSectionStyle

const namePlaceholderStyle=`
    position:absolute;
    top:4px;
    left:0;
    color:rgb(156, 154, 152);
    font-family:arial;
    font-weight:bold;
    font-size:0.8rem;
`
const emailPlaceholderStyle=namePlaceholderStyle


const nameIconStyle=`
    background:rgb(163, 161, 155);
    mask:url(/devspot/images/person.svg) no-repeat center;
    width:30px;
    height:20px;
`

const emailIconStyle=`
    mask:url(/devspot/images/enveloppe.svg) no-repeat center;
    background:rgb(163, 161, 155);
    width:30px;
    height:20px;
`


const nameInputStyle=`
    border-width:0px;
    background:transparent;
    color:rgb(156, 154, 152);
    font-family:arial;
    font-weight:bold;
    outline-width:0px;
    font-size:0.8rem;
    flex-grow:1;
    height:20px;
`
const emailInputStyle=nameInputStyle



const textAreaStyle=`
    background:rgb(237, 234, 230);
    border-radius:10px;
    border-width:0px;
    font-family:arial;
    font-weight:bold;
    color:rgb(156, 154, 152);
    outline-width:0px;
    height:90px;
    margin-bottom:20px;
    padding:10px;
    font-size:0.8rem;
`


const submitStyle=`
    padding:10px;
    border-width:0px;
    color:white;
    font-weight:bold;
    background:rgb(86, 209, 201);
    border-radius:20px;
    cursor:pointer;
`




function html(data){
    return `
        <form action="${data.link||''}" style="${formSectionStyle}" formSection>
            <span style="${titleStyle}" title>Get in touch</span>
            <div style="${nameSectionStyle}" nameSection>
                <div style="${nameIconStyle}" nameIcon></div>
                <div style="${nameInputSectionStyle}" nameInputSection>
                    <span style="${namePlaceholderStyle}" namePlaceholder>Name</span>
                    <input style="${nameInputStyle}" type="text" name="name" nameInput>
                </div>
            </div>
            <div style="${emailSectionStyle}" emailSection>
                <div style="${emailIconStyle}" emailIcon></div>
                <div style="${emailInputSectionStyle}" emailInputSection>
                    <span style="${emailPlaceholderStyle}" emailPlaceholder>Email</span>
                    <input style="${emailInputStyle}" type="email" name="email" emailInput>
                </div>
            </div>
            <textarea style="${textAreaStyle}" name="message" textArea>Message</textarea>
            <input style="${submitStyle}" type="submit" value="Send" style="" submit>
        </div>
    `
}




export default function(){
    const all = document.querySelectorAll('contact-form-1').forEach((e)=>{
        e.style=wrapperStyle
        const data = JSON.parse(e.getAttribute('data')||'{}')
        e.innerHTML=html(data)
        e.querySelector('[nameInput]').addEventListener('focusin', ()=>{
            e.querySelector('[namePlaceholder]').style.display="none"
        })
        e.querySelector('[nameInput]').addEventListener('focusout', (event)=>{
            if(event.target.value=="") e.querySelector('[namePlaceholder]').style.display="inline"
        })
        e.querySelector('[emailInput]').addEventListener('focusin', ()=>{
            e.querySelector('[emailPlaceholder]').style.display="none"
        })
        e.querySelector('[emailInput]').addEventListener('focusout', (event)=>{
            if(event.target.value=="") e.querySelector('[emailPlaceholder]').style.display="inline"
        })
    })
}



