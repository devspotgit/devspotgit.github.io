



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



function latestPost(post1, post2){

    if(parseInt(post1.date.split("-")[2], 10) > parseInt(post2.date.split("-")[2], 10)) return post1
    else if(parseInt(post1.date.split("-")[2], 10) < parseInt(post2.date.split("-")[2], 10)) return post2
    else if(parseInt(post1.date.split("-")[0], 10) > parseInt(post2.date.split("-")[0], 10)) return post1
    else if(parseInt(post1.date.split("-")[0], 10) < parseInt(post2.date.split("-")[0], 10)) return post2
    else if(parseInt(post1.date.split("-")[1], 10) > parseInt(post2.date.split("-")[1], 10)) return post1
    else if(parseInt(post1.date.split("-")[1], 10) < parseInt(post2.date.split("-")[1], 10)) return post2
    else return post1
}



function postSort(posts){


}


module.exports = {
    months,
    postSort,
    categoryPosts
}




