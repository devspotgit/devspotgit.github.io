
import posts from "/static/js/posts.js"


// get the post from post name
function get_post(post_name){
    for(let i=0; i<posts.length; i++){
        if(posts[i].name == post_name) return posts[i]
    }
}


//get all posts
function get_all_posts(){
    return posts
}


// return categories from posts
function get_categories(){
    const categories = []
    for(let i=0; i<posts.length; i++){
        let j=0
        for(j; j<categories.length; j++){
            if(posts[i].category == categories[j]) break
        }
        if(j == categories.length) categories.push(posts[i].category)
    }
    return categories
}

// return posts from specific category
function get_category_posts(category){
    const category_posts = []
    for(let i=0; i<posts.length; i++){
        if(posts[i].category == category) category_posts.push(posts[i])
    }
    return category_posts
}


// return sub category posts from category posts 
function get_sub_category_posts(category_posts, sub_category){
    const sub_category_posts = []
    for(let i=0; i<category_posts.length; i++){
        if(category_posts[i].sub_category == sub_category) sub_category_posts.push(category_posts[i])
    }
    return sub_category_posts
}


// return sub categories from the specified category
function get_sub_categories(category){
    const sub_categories = []
    for(let i=0; i<posts.length; i++){
        if(posts[i].category == category){
            let j=0
            for(j; j<sub_categories.length; j++){
                if(posts[i].sub_category == sub_categories[j]) break
            }
            if(j == sub_categories.length) sub_categories.push(posts[i].sub_category)
        }
    }
    return sub_categories
}



// return all the posts from the specified tag
function get_tag_posts(tag){
    const tag_posts = []
    for(let i=0; i<posts.length; i++){
        for(let j=0; j<posts[i].tags.length; j++){
            if(posts[i].tags[j] == tag){
                tag_posts.push(posts[i])
                break
            }
        }
    }
    return tag_posts
}


// return posts from search
function get_search_posts(key_word){
    const search_posts = []
    for(let i=0; i<posts.length; i++){
        for(let j=0; j<posts[i].tags.length; j++){
            if(posts[i].tags[j].search(key_word) >= 0){
                search_posts.push(posts[i])
                break
            }
        }
    }
    return search_posts
}

// read file
async function get_content(file){
    const res = await fetch(file)
    return await res.text()
}



export {
    get_categories, 
    get_category_posts, 
    get_search_posts,
    get_sub_categories,
    get_tag_posts,
    get_sub_category_posts,
    get_post,
    get_content,
    get_all_posts
}




