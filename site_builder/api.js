



const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]


function categoryPosts(category, posts){
    const categoryPosts=[]

    posts.forEach(item => {
        if(item.category == category.slug) categoryPosts.push(item)
    })

    return categoryPosts
}



function post(posts, slug){
    for(const post of posts)
        if(post.slug == slug ) return post

    return false
}



function category(categories, slug){
    for(const category of categories)
        if(category.slug == slug) return category

    return false
}



function latestPost(post1, post2){
    if(parseInt(post1.date.split("-")[2], 10) > parseInt(post2.date.split("-")[2], 10)) return 1
    
    else if(parseInt(post1.date.split("-")[2], 10) < parseInt(post2.date.split("-")[2], 10)) return 2
    
    else if(parseInt(post1.date.split("-")[0], 10) > parseInt(post2.date.split("-")[0], 10)) return 1
    
    else if(parseInt(post1.date.split("-")[0], 10) < parseInt(post2.date.split("-")[0], 10)) return 2
    
    else if(parseInt(post1.date.split("-")[1], 10) > parseInt(post2.date.split("-")[1], 10)) return 1
    
    else if(parseInt(post1.date.split("-")[1], 10) < parseInt(post2.date.split("-")[1], 10)) return 2
    
    else return 1
}



function postSort(posts){
    for(let i=1; i<posts.length; i++){        
        for(let j=0; j<posts.length-i; j++){
            if(latestPost(posts[j], posts[j+1]) == 2){
                const temp = posts[j]

                posts[j] = posts[j+1]
                
                posts[j+1] = temp
            }
        }
    }
}


export { months, postSort, categoryPosts, post, category }




