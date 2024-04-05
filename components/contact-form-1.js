


function html(data){

    return`
        <form action="${data.link||''}">
            <span>Get in touch</span>
            <div>
                <input type="text" placeholder="Name" name="name" required>
            </div>
            <div>
                <input type="email" placeholder="Email" name="email" required>
            </div>
            <div>
                <textarea name="message" required></textarea>
                <span>Message</span>
            </div>
            <input type="submit" value="Send">
        </form>
    `
}



export default function(){
    document.querySelectorAll('contact-form-1').forEach(e =>{
        const data = JSON.parse(e.getAttribute('data')||'{}')
        e.innerHTML=html(data)

        //event textarea focus in
        e.querySelector('textarea').addEventListener('focusin', event=>{
            e.querySelector('form > :nth-child(4) span').style.display='none'
        })

        //event textarea focus out
        e.querySelector('textarea').addEventListener('focusout', event=>{
            if(event.target.value=='') e.querySelector('form > :nth-child(4) span').style.display='inline'
        })
    })

}


