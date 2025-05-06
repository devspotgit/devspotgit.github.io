
import * as api from "./api.js"

import * as templates from "./templates.js" 

import * as fs from "fs/promises"



const site = "../site"

const files = "."



async function render(route, data){

    const root = route.split("/")[1]

    const slug = route.split("/")[2]

    if(root == "posts"){

        const post = api.post(data.posts, slug)

        const content = await fs.readFile(files+"/post_content/"+post.content, "utf-8")

        return templates.postPage(post, content, data.categories)

    }
    else if(root == "categories"){

        const category = api.category(data.categories, slug)

        const categoryPosts = api.categoryPosts(category, data.posts)

        api.postSort(categoryPosts)

        return templates.categoryPage(category, data.categories, categoryPosts)

    }
    else{

        const posts = data.posts

        api.postSort(posts)

        return templates.homePage(data.categories, posts)

    }

}




let routeTracker = await fs.readFile(site+"/routes.json", "utf-8")

routeTracker = JSON.parse(routeTracker)

for(const route of routeTracker){
    
    if(route == "/")  

        await fs.rm(site+"/index.html", { recursive: true, force: true })
    
    else

        await fs.rm(site+route, { recursive: true, force: true })
}

let siteData = await fs.readFile(files+"/data.json", "utf-8")

siteData = JSON.parse(siteData)

let routes = await fs.readFile(files+"/routes.json", "utf-8")

routes = JSON.parse(routes)

const data = []

for(const route of routes){

    const content = await render(route, siteData)
    
    data.push({route:route, content:content})
}


for(const item of data){

    if(item.route == "/")   

        await fs.writeFile(site+"/index.html", item.content, "utf-8")

    else{

        await fs.mkdir(site+item.route, { recursive: true })
        
        await fs.writeFile(site+item.route+"/index.html", item.content, "utf-8")
    }

}

await fs.copyFile(files+"/routes.json", site+"/routes.json")













