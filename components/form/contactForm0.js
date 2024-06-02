



const html = ()=>`
    <div class="wrapper">
        <span>Get in touch</span>
        <div>
            <div class="input-section">
                <span>NAME</span>
                <input placeholder="Enter your name" type="text" name="name" required/>
            </div>
            <div class="input-section">
                <span>EMAIL ADDRESS</span>
                <input placeholder="Enter your email address" name="email" type="email" required/>
            </div>
            <div class="input-section">
                <span>MESSAGE</span>
                <textarea placeholder="Enter your message" required></textarea>
            </div>
            <button>Submit</button>
            <button>Submit</button>
        </div>
    </div>
`


const css = (obj) =>`

    .wrapper{
        display:flex;
        flex-direction:column;
        gap:20px;
        /*max-width:600px;*/
        font-family:${obj.font};
        color:${obj.color[0]};
        background:${obj.color[1]};
        padding:20px;
    }

    .input-section{
        display:flex;
        flex-direction:column;
        gap:5px;
    }

    .wrapper > div{
        display:flex;
        flex-direction:column;
        gap:15px;
    }

    .input-section > input{
        height:40px;
        border-width:0px;
        background:${obj.color[0]};
        color:${obj.color[1]};
        font-family:${obj.font};
    }

    .input-section > span{
        font-weight:bold;
    }

    textarea{
        height:100px;
        background:${obj.color[0]};
        border-width:0px;
        font-family:${obj.font};
        color:${obj.color[1]};
    }

    button{
        align-self:start;
        padding:10px;
        border-width:0px;
        background:${obj.color[0]};
        color:${obj.color[1]};
        font-size:1.2rem;
        font-family:${obj.font};
    }

    .wrapper > span{
        font-size:2rem;
        font-weight:bold;
    }

    ::placeholder{
        color:${obj.color[1]};
        font:${obj.font};
    }

    button{
        cursor:pointer;
    }

    button:last-of-type{
        display:none;
    }

    input:focus:invalid{
        outline:2px solid red;
    }

    input:focus:valid{
        outline:2px solid green;
    }

    textarea:focus:invalid{
        outline:2px solid red;
    }

    textarea:focus:valid{
        outline:2px solid green;
    }

    .wrapper > div:has(button:first-of-type:focus) > div:first-child  input:invalid {
        outline:2px solid red;
    }

    .wrapper > div:has(button:first-of-type:focus) > div:first-child:has(input:valid) + div input:invalid {
        outline:2px solid red;
    }

    .wrapper > div:has(button:first-of-type:focus) > div:first-child:has(input:valid) + div:has(input:valid) + div textarea:invalid {
        outline:2px solid red;
    }

    .wrapper > div > div:first-child:has(input:valid) + div:has(input:valid) + div:has(textarea:valid) ~ button:last-of-type {
        display:inline;
    }

    .wrapper > div > div:first-child:has(input:valid) + div:has(input:valid) + div:has(textarea:valid) ~ button:first-of-type {
        display:none;
    }

`


class contactForm0 extends HTMLElement{

    constructor(){
        super()
    }

    connectedCallback(){

        const obj = {color:[]}
        obj.color.push(this.getAttribute('color-0')||'rgb(235, 235, 235)')
        obj.color.push(this.getAttribute('color-1')||'rgb(150, 150, 143)')
        obj.font=this.getAttribute('font')||'arial'
        obj.link=this.getAttribute('link')||'/'

        const sheet = new CSSStyleSheet()
        sheet.replaceSync(css(obj))
        const shadow = this.attachShadow({mode:'open'})
        shadow.adoptedStyleSheets = [sheet]
        shadow.innerHTML = html()

        shadow.querySelector('button:last-of-type').addEventListener('click', ()=>{

            let name=shadow.querySelector('input[name="name"]').value
            let email=shadow.querySelector('input[name="email"]').value
            let message=shadow.querySelector('textarea').value

            fetch(obj.link+'?name='+name+'&email='+email+'&message='+message)
            
            //console.log(obj.link+'?name='+name+'&email='+email+'&message='+message)
        })
        
    }

}


function contactForm0Def(){
    customElements.define("contact-form-0", contactForm0)
}

export default contactForm0Def








