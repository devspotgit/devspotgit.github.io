

const html = (data) =>{
    return`
        <div>
            <span>Let's stay in touch</span>
            <span>We are open to any suggestion or to just chat</span>
            <ul>
                <li>Address: ${data.address||'25 Laurier Street, Cityville, ON'}</li>
                <li>Phone: ${data.phone||'+1557-244-4457'}</li>
                <li>Email: ${data.email||'info@mail.com'}</li>
                <li>Website: ${data.website||'www.name.com'}</li>
            </ul>
        </div>
        <form action="${data.link||''}">
            <span>Contact us</span>
            <div>
                <div class="item-section">
                    <span>full name</span>
                    <input type="text" name="name" Placeholder="Name" required>
                </div>
                <div class="item-section">
                    <span>email address</span>
                    <input type="email" name="email" placeholder="Email" required>
                </div>
            </div>
            <div class="item-section">
                <span>subject</span>
                <input type="text" name="subject" placeholder="Subject" required>
            </div>
            <div class="item-section">
                <span>message</span>
                <div>
                    <textarea name="message" required></textarea>
                    <span placeholder>Message</span>
                </div>
            </div>
            <input type="submit" value="Send Message">
        </form>
    `
}



export default function(){
    document.querySelectorAll('contact-form-2').forEach(e =>{
        const data = JSON.parse(e.getAttribute('data')||'{}')
        e.innerHTML=html(data)
        setInterval(()=>{
            if(e.querySelector('textarea').value=="") e.querySelector('span[placeholder]').style.display="inline"
            else e.querySelector('span[placeholder]').style.display="none"
        },100)
    })
}

