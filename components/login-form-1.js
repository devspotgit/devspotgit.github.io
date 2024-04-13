


function html(data){
    return`
        <input type="radio" name="page" id="signin" checked>
        <div page="signin-page">
            <span>Sign In</span>
            <span>error----------------------------------------------------------------------</span>
            <div signin-usn-wrp>
                <input type="text" placeholder="Username" signin-usn>
            </div>
            <div signin-pwd-wrp>
                <input type="password" placeholder="Password" signin-pwd>
            </div>
            <label for="forgot">Forgot Password</label>
            <input type="button" value="SIGN IN" signin-submit>
            <span>Don't have an account yet?</span>
            <label for="signup">SIGN UP NOW</label>  
        </div>
        <input type="radio" name="page" id="signup">
        <div page="signup-page">
            <span>Sign Up</span>
            <span>error</span>
            <div signup-usn-wrp>
                <input type="text" placeholder="Username" signup-usn>
            </div>
            <div signup-eml-wrp>
                <input type="email" placeholder="Email" signup-eml>
            </div>
            <div signup-pwd-wrp>
                <input type="password" placeholder="Password" signup-pwd>
            </div>
            <div signup-conf-pwd-wrp>
                <input type="password" placeholder="Confirm Password" signup-conf-pwd>
            </div>
            <input type="button" value="SIGN UP" signup-submit>
            <span>Already have an account?</span>
            <label for="signin">SIGN IN NOW</label>  
        </div>
        <input type="radio" name="page" id="forgot">
        <div page="forgot-page">
            <span>Forgot Password</span>
            <div forgot-eml-wrp>
                <input type="email" placeholder="Email" forgot-eml>
            </div>
            <input type="button" value="FORGOT" forgot-submit>
            <label for="signin">BACK TO SIGN IN</label>
        </div>
    `
}


function emailValidation(eml){
    return eml;
}



export default function(){
    document.querySelectorAll('login-form-1').forEach(e =>{
        const data = JSON.parse(e.getAttribute('data')||'{}')
        e.innerHTML=html(data)

        e.querySelectorAll('input:not([type="button"])').forEach(elt=>{
            elt.addEventListener('focusin', event =>{
                event.target.parentElement.setAttribute('class', '')
            })
        })

        e.querySelector('[signin-submit]').addEventListener('click', ()=>{
            let usn=e.querySelector('[signin-usn]').value
            let pwd=e.querySelector('[signin-pwd]').value
            let error=''
            if(pwd||usn) error='error'
            if(usn=='') e.querySelector('[signin-usn-wrp]').setAttribute('class', 'error')
            if(pwd=='') e.querySelector('[signin-pwd-wrp]').setAttribute('class', 'error')
            if(!error){
        
                ///


            }
        })
        e.querySelector('[signup-submit]').addEventListener('click', ()=>{
            let usn=e.querySelector('[signup-usn]').value
            let pwd=e.querySelector('[signup-pwd]').value
            let eml=e.querySelector('[signup-eml]').value
            let pwdConf = e.querySelector('[signup-conf-pwd]').value
            let error=''
            if(usn==''){
                error='error'
                e.querySelector('[signup-usn-wrp]').setAttribute('class', 'error')
            }
            if(pwd==''){
                error='error'
                e.querySelector('[signup-pwd-wrp]').setAttribute('class', 'error')
            }
            if(!emailValidation(eml)){
                error='error'
                e.querySelector('[signup-eml-wrp]').setAttribute('class', 'error')
            }
            if(pwdConf=='' || pwdConf!=pwd){
                error='error'
                e.querySelector('[signup-conf-pwd-wrp]').setAttribute('class', 'error')
            }
            if(!error){
        
                ///

                
            }
        })

        e.querySelector('[forgot-submit]').addEventListener('click', ()=>{
            let eml=e.querySelector('[forgot-eml]').value
            let error=''
            if(!emailValidation(eml)){
                error='error'
                e.querySelector('[forgot-eml-wrp]').setAttribute('class', 'error')
            }
            if(!error){
    
                ///

                
            }

        })


    })

}

