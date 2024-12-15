
import {
    home_page, 
    post_page, 
    category_page, 
    search_page, 
    tag_page
} from "/static/js/templates.js"


/* URLs
/?category=...
/?category=...&sub_category=...
/?tag=...
/?key_word=...
/posts/...
/
*/

const url = window.location.pathname.split("/")
const param = new URLSearchParams(window.location.search)
let i=0
for(i; i<url.length; i++){
    if(url[i]=="posts"){
        for(let j=i+1; j<url.length; j++){
            if(url[j]!=""){
                const post = url[j].split("_").join(" ")
                document.querySelector("body").innerHTML = await post_page(post)
                break
            }
        }
        break
    }
}
if(i==url.length){
    if(param.size == 0){
        document.querySelector("body").innerHTML = home_page()
    }
    else if(param.size == 1){
        if(param.get('tag')!=null){
            document.querySelector("body").innerHTML = tag_page(param.get('tag'))
        }
        else if(param.get("key_word")){
            document.querySelector("body").innerHTML = search_page(param.get('key_word'))
        }
    }
    else if(param.size == 2){
        document.querySelector("body").innerHTML = category_page(param.get("category"),param.get("sub_category"))
    }
}










