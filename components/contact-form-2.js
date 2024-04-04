



function html(data){
    return `
        <div>
            <div>Let's stay in touch</div>
            <div>We are open to suggestionor just to have a chat</div>
            <div>
                <div></div>
                <span>Address:${data.address||''}</span>
            </div>
            <div>
                <div></div>
                <span>Email:${data.email||''}</span>
            </div>
            <div>
                <div></div>
                <span>Website:${data.website||''}</span>
            </div>
        </div>

        <form action="${data.link||''}">
            <span>${data.title||''}</span>
            <div>
                <div>
                    <span>Full Name</span>
                    <input type="text">
                </div>

                <div>
                    <span>Email Address</span>
                    <input type="email">
                </div>
            </div>

            <div>
                <span>Subject</span>        
                <input type="text">
            </div>

            <div>
                <span>Message</span>        
                <textarea>Message</textarea>
            </div>

            <input type="submit">
        
        </form>
    `
}




export default function(){
    document.querySelectorAll('contact-form-2').forEach(e => {
        const data = JSON.parse(e.getAttribute('data')||'{}')
        e.innerHTML=html(data)
    })
}


