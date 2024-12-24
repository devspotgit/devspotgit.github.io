

import {home_page, list_page, post_page} from "/static/js/templates.js"


/* URLs
/
/all_posts
/posts/{post}
/categories/{category}
/search/?keyword={keyword}
*/


const url = window.location.pathname.split("/")
const param = new URLSearchParams(window.location.search)

if(url[1] == "all_posts" && url.length == 2)
    document.body.innerHTML = list_page({type:"all_page"})
else if(url[1] == "posts" && url.length == 3)
    document.body.innerHTML = post_page(url[2].split("_").join(" "))
else if(url[1] == "categories" && url.length == 3)
    document.body.innerHTML = list_page({type:"category_page", category:url[2].split("_").join(" ")})
else if(url[1] == "search" && url.length == 2)
    document.body.innerHTML = list_page({type:"search_page", keyword:param.get("keyword")})
else if(url[1] == "" && url.length == 2){
    document.body.innerHTML = home_page()
    document.title = "DevSpot - Free Html Templates"
}




