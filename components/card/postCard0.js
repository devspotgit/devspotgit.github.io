

function html(obj){

    return `
        <div class="wrapper">
        
        
        
        
        </div>
    
    `
}


function css(obj){




}


class postCard0 extends HTMLElement{

    constructor(){
        super()
    }

    connectedCallback(){


        const obj={color:[]}

        obj.title=this.getAttribute('title')||'Title'
        obj.category=this.getAttribute('category')||'Category'
        obj.day=this.getAttribute('day')||'day'
        obj.month=this.getAttribute('month')||'month'
        obj.year=this.getAttribute('year')||'year'
        obj.preview=this.innerHTML||'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'

        const sheet = new CSSStyleSheet()
        sheet.replaceSync(css(obj))
        const shadow = this.attachShadow({mode:'open'})
        shadow.adoptedStyleSheets = [sheet]
        shadow.innerHTML = html(obj)

    }

}



function postCard0Def(){
    customElements.define("post-card-0", postCard0)
}

export default postCard0Def


