
import {posts} from "/static/js/data.js"


//list all categories
function categories(){
    const _categories = []
    for(let i=0; i<posts.length; i++){
        let j
        for(j=0; j<_categories.length; j++)
            if(posts[i].category == _categories[j]) 
                break
        if(j==_categories.length) _categories.push(posts[i].category)
    }
    return _categories
}


//list posts from category
function category_posts(category){
    const _category_posts = []
    for(let i=0; i<posts.lenght; i++)
        if(posts[i].category == category) 
            _category_posts.push(posts[i])
    return _category_posts
}


//list all posts
function all_posts(){
    return posts
}


//list search posts
function search_posts(keyword){
    const _search_posts = []
    for(let i=0; i<posts.length; i++){
        for(let j=0; j<posts[i].tags.length; j++)
            if(keyword == posts[i].tags[j]){
                _search_posts.push(posts[i])
                break
            }
    }
    return _search_posts
}


//get post
function post(name){
    for(let i=0; i<posts.length; i++)
        if(posts[i].name == name) return posts[i]
}


export {categories, category_posts, all_posts, search_posts, post}


