



const html=`
  
    <div class="navbar-header">
        <slot name="navbar-title"></slot>
        <div class="label-wrapper">
            <label for="menu"></label>
        </div>
    </div>
    <input type="checkbox" id="menu"/>
    <div class="navbar-menu">
        <slot name="navbar-menu-item"></slot>
    </div>
    
`


const css = `

    :host{
        display:flex;
        justify-content:space-between;
        font-family:arial;
        color:rgb(217, 213, 212);
        background:rgb(41, 39, 38);
    }

    label{
        display:none;
    }

    input{
        display:none;
    }

    ::slotted(a){
        text-decoration:none;
        color:inherit;
        padding:20px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }

    .navbar-menu ::slotted(a){
        font-size:1.5rem;
    }

    .navbar-header ::slotted(a){
        font-size:3rem;
    }

    .navbar-menu{
        display:flex;
    }

    .navbar-menu ::slotted(:hover){
        color:rgb(41, 39, 38);
        background:rgb(217, 213, 212);
    }



    @media(max-width:600px){

        .navbar-header{
            display:flex;
            justify-content:space-between;
        }

        :host{
            flex-direction:column;
            justify-content:flex-start;
        }

        .label-wrapper{
            display:flex;
            padding:20px;
            margin:10px;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            background:rgb(110, 107, 105);
        }

        label{
            display:block;
            padding:20px;
            background:rgb(217, 213, 212);
            mask-image: url("https://img.icons8.com/ios-glyphs/30/menu--v1.png");
            mask-repeat: no-repeat;
            mask-position: center;
            cursor:pointer;
        }

        .navbar-menu{
            flex-direction:column;
            max-height:0px;
            overflow:hidden;
            transition: max-height 1s;
        }

        input:checked ~ .navbar-menu{
            max-height:500px;
        }


    }

`


class navbarDropdown extends HTMLElement{

    constructor(){
        super()
    }

    connectedCallback(){
        const sheet = new CSSStyleSheet()
        sheet.replaceSync(css)
        const shadow = this.attachShadow({mode:'open'})
        shadow.adoptedStyleSheets = [sheet]
        shadow.innerHTML=html
    }

}

customElements.define('navbar-dropdown', navbarDropdown)


