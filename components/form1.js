



function html(data){

    return `
        <form action=${data.link||''}>
            <span>${data.title||'Registration'}</span>
            <div class="info">
                <div class="email">
                    <span class="bi bi-envelope-fill"></span>
                    <input type="email" name="email" placeholder="Email" pattern="${data.emailPattern||'[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$'}" required/>
                </div>
                <div class="name">
                    <span class="bi bi-person-fill"></span>
                    <input type="text" name="name" placeholder="Name" required/>
                </div>
                <div class="pwd">
                    <span class="bi bi-lock-fill"></span>
                    <input type="password" name="pwd" placeholder="Password" pattern="${data.pwdPattern||'(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required/>
                </div>
            </div>
            <input type="submit"/>
        </form>
    `
}


export default function(){

    const all = document.querySelectorAll('form1')

    for(let i=0; i<all.length; i++){
        const data = JSON.parse(all[i].getAttribute('data')||'{}')
        all[i].innerHTML=html(data)

    }

}

