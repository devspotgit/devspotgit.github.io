
import * as api from "./api.js"

import * as templates from "./templates.js" 

import * as fs from "fs"



const site = "../site"

const files = "."



function render(route, data){
    const root = route.split("/")[1] || "home"

    const slug = route.split("/")[2]

    if(root == "posts"){
        const post = api.post(data.posts, slug)

        if(post){
            if(fs.existsSync(files+"/post_content/"+post.content)){
                const content = fs.readFileSync(files+"/post_content/"+post.content, "utf8")
    
                return templates.postPage(post, content, data.categories)
            }
            else{
                console.log("Can't find "+files+"/post_content/"+post.content)
    
                process.exit(1)
            }
        }
        else{
            console.log("Can't find post slug "+slug)

            process.exit(1)
        }
    }
    else if(root == "categories"){
        const category = api.category(data.categories, slug)

        if(category){
            const categoryPosts = api.categoryPosts(category, data.posts)
    
            api.postSort(categoryPosts)
    
            return templates.categoryPage(category, data.categories, categoryPosts)
        }
        else{
            console.log("Can't find category slug "+slug)

            process.exit(1)
        }
    }
    else if(root == "home"){
        const posts = data.posts

        api.postSort(posts)

        return templates.homePage(data.categories, posts)
    }
}



if(fs.existsSync(site+"/routes.json")){
    const routes = JSON.parse(fs.readFileSync(site+"/routes.json", "utf8"))

    routes.forEach(route => {
        if(route == "/"){
            if(fs.existsSync(site+"/index.html"))
                fs.rmSync(site+"/index.html", { recursive: true })
        } 
        else if(fs.existsSync(site+"/"+route.split("/")[1]))
            fs.rmSync(site+"/"+route.split("/")[1], { recursive: true })
    })

    fs.rmSync(site+"/routes.json", { recursive: true })
}



if(fs.existsSync(files+"/data.json")){
    const data = JSON.parse(fs.readFileSync(files+"/data.json", "utf8"))
    
    if(fs.existsSync(files+"/routes.json")){
        const routes = JSON.parse(fs.readFileSync(files+"/routes.json", "utf8"))

        const pages = routes.map(route => ({route:route, content:render(route, data)}))

        pages.forEach(page => {
            if(page.route == "/")
                fs.writeFileSync(site+"/index.html", page.content)
            
            else{
                fs.mkdirSync(site+page.route, { recursive: true })

                fs.writeFileSync(site+page.route+"/index.html", page.content)
            }
        })

        fs.copyFileSync(files+"/routes.json", site+"/routes.json")
    }
    else{
        console.log("Can't find "+files+"/routes.json")

        process.exit(1)
    }
}
else{
    console.log("Can't find "+files+"/data.json")

    process.exit(1)
}
























