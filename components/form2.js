




const html = (data) =>{

    return `
        <form action="${data.link||''}">
            <span>${data.title||'Registration'}</span>
            <div class="name-header">
                <span class="bi bi-person"></span>
                <span>Your Name</span>
            </div>
            <div class="name-info">
               <input type="text" placeholder="First Name" name="fname" required/>
               <input type="text" placeholder="Last Name" name="lname" required/> 
            </div>
            <div class="email-header">
                <span class="bi bi-at"></span>
                <span>Your Email</span>
            </div>
            <div class="email-info">
                <input type="email" placeholder="eg. pitLatimer@mail.com" name="email" required/>
            </div>
            <div class="phone-header">
                <span class="bi bi-telephone"></span>
                <span>Your Phone</span>
                <span>(optional)</span>
            </div>
            <div class="phone-info">
                <input type="tel" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
            </div>
            <div class="wrapper">
                <input type="submit" value="Register">
            </div>
        </form>
    `
}



export default function(){

    const all = document.querySelectorAll('form2')

    for(let i=0; i<all.length; i++){
        const data = JSON.parse(all[i].getAttribute('data')||'{}')
        all[i].innerHTML=html(data)
    }

}


