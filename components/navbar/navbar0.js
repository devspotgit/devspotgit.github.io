

const html = (obj) => {

    let items=``

    obj.item.forEach(item => {
        items+=`<a href="${item.link}">${item.name}</a>`
    })
  
    return `
        <div class="wrapper">
            <div class="navbar-header">
                <a href="${obj.link}">${obj.title}</a>
                <div class="label-wrapper">
                    <label for="menu"></label>
                </div>
            </div>
            <input type="checkbox" id="menu"/>
            <div class="navbar-menu">${items}</div>
        </div>
    `
}

const css = (obj) =>`

    .wrapper{
        display:flex;
        justify-content:space-between;
        font-family:${obj.font};
        color: ${obj.color[0]};
        background: ${obj.color[1]};
    }

    label{
        display:none;
    }

    input{
        display:none;
    }

    a{
        text-decoration:none;
        color:inherit;
        padding:20px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }

    .navbar-menu a{
        font-size:1.5rem;
    }

    .navbar-header a{
        font-size:3rem;
    }

    .navbar-menu{
        display:flex;
    }

    .navbar-menu a:hover{
        color: ${obj.color[1]};
        background: ${obj.color[0]};
    }



    @media(max-width:700px){

        .navbar-header{
            display:flex;
            justify-content:space-between;
        }

        .wrapper{
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
            background: ${obj.color[2]};
        }

        label{
            display:block;
            padding:20px;
            background:${obj.color[0]};
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


class navbar0 extends HTMLElement{

    constructor(){
        super()
    }

    connectedCallback(){

        const obj={color:[], item:[]}

        obj.color.push(this.getAttribute('color-0')||'rgb(217, 213, 212)')
        obj.color.push(this.getAttribute('color-1')||'rgb(41, 39, 38)')
        obj.color.push(this.getAttribute('color-2')||' rgb(110, 107, 105)')

        obj.title=this.getAttribute('title')||'Title'
        obj.link=this.getAttribute('link')||'/'
        obj.font=this.getAttribute('font')||'Arial'

        this.querySelectorAll('item').forEach(item => {
            obj.item.push({name: item.getAttribute('name')||'item', link: item.getAttribute('link')||'/'})
        })

        const sheet = new CSSStyleSheet()
        sheet.replaceSync(css(obj))
        const shadow = this.attachShadow({mode:'open'})
        shadow.adoptedStyleSheets = [sheet]
        shadow.innerHTML=html(obj)

    }

}

customElements.define('navbar-0', navbar0)


