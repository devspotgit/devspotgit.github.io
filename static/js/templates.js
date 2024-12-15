

import {
    get_categories, 
    get_category_posts, 
    get_search_posts,
    get_sub_categories,
    get_tag_posts,
    get_sub_category_posts,
    get_post,
    get_content,
    get_all_posts
} from "/static/js/api.js"



/************* template parts *************/

async function post_content(post){

    if(post.category == "blog") return await blog_content(post)
    else if(post.category == "templates") return template_content(post)
}

function post_card(post){

    const slug = post.name.split(" ").join("_")
    let text = ""
    if(post.category == "blog") text = "Read More"
    else if(post.category == "templates") text = "Preview"

    return `
        <div class="post-card">
            <div>${post.name}</div>
            <div>
                <span>${post.category}</span>
                <span>${post.name}</span>
                <a href="/posts/${slug}">${text}</a>        
            </div>
        </div>
    `
}

async function blog_content(post){

    let tags = ""
    for(let i=0; i<post.tags.length; i++) tags = `${tags} <a href="/?tag=${post.tags[i]}">${post.tags[i]}</a>`
    const slug = post.name.split(" ").join("_")
    const content = await get_content("/posts/"+slug+"/"+slug+".html")

    return `
        <div class="blog-content">
            <span>${post.name}</span>
            <div>${content}</div>
            <div>${tags}</div>  
        </div>
    `
}

function template_content(post){

    let tags = ""
    const slug = post.name.split(" ").join("_")
    for(let i=0; i<post.tags.length; i++) tags = `${tags} <a href="/?tag=${post.tags[i]}">${post.tags[i]}</a>`

    return `
        <div class="template-content">
            <span>${post.name}</span>
            <iframe src="/posts/${slug}/site/"></iframe>
            <div>${tags}</div>
            <div>
                <a href="/posts/${slug}/site"></a>
                <a href="/posts/${slug}/${slug}.zip"></a>
            </div>
        </div>
    `
}


function header(){

    return `
        <div action="/" class="header">
            <div>
                <a href="/">DevSpot</a>
                <button id="menu"></button>
            </div>
            <form action="/">
                <input type="text" name="key_word"/>
                <button></button>
            </form>
        </div>
    `
}

function footer(){

    return `
        <div class="footer">
            <a href="/">DevSpot</a>
        </div>
    `
}


function post_list(posts){

    let list=""
    for(let i=0; i<posts.length; i++) list=`${list} ${post_card(posts[i])}`

    return `
        <div class="post-list">${list}</div>
    `
}


function side(){

    const categories = get_categories()
    let _categories = ""
    for(let i=0; i<categories.length; i++){
        const sub_categories = get_sub_categories(categories[i])
        let _sub_categories = ""
        for(let j=0; j<sub_categories.length; j++) _sub_categories = `${_sub_categories} <a href="/?category=${categories[i]}&sub_category=${sub_categories[j]}">${sub_categories[j]}</a>`
        _categories = `${_categories} 
            <div>
                <span>${categories[i]}</span>
                <div>${_sub_categories}</div>
            </div>
        `
    }

    return `
        <div class="side">
            ${_categories}
        </div>
    `
}


/************* templates *************/

function home_page(){

    const all_posts = get_all_posts()

    return `
        <div class="main">
            ${header()}
            <div>
                ${side()}
                ${post_list(all_posts)}
            </div>
            ${footer()}
        </div>
    `
}


function category_page(category, sub_category){

    const category_posts = get_category_posts(category)
    const sub_category_posts = get_sub_category_posts(category_posts, sub_category)

    return `
      <div class="main">
            ${header()}
            <div>
                ${side()}
                ${post_list(sub_category_posts)}
            </div>
            ${footer()}
        </div>
    `
}


async function post_page(post_name){

    const post = get_post(post_name)

    return `
        <div class="main">
            ${header()}
            <div>
                ${side()}
                ${await post_content(post)}
            </div>
            ${footer()}
        </div>
    `
}


function tag_page(tag){

    const tag_posts = get_tag_posts(tag) 

    return `
        <div class="main">
            ${header()}
            <div>
                ${side()}
                ${post_list(tag_posts)}
            </div>
            ${footer()}
        </div>
    `
}


function search_page(key_word){

    const search_posts = get_search_posts(key_word)

    return `
        <div class="main">
            ${header()}
            <div>
                ${side()}
                ${post_list(search_posts)}
            </div>
            ${footer()}
        </div>
    `
}



export{home_page, post_page, category_page, search_page, tag_page}



