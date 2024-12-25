




const { categories, category_posts, all_posts, post } = require ("./api.js")



function side(){
 const cat = categories()
 let cat_html = ""
 for(let i=0; i< cat.length; i++){
  const cat_slug = cat[i].split(" ").join("_")
  cat_html += `
   <a href="/categories/${cat_slug}">${cat[i]}</a>
  `
 }
 return `
  <div class="side">${cat_html}</div>
 `
}



function header(){
 return `
  <div class="header">
   <a href="/">DevSpot</a>
  </div>
 `
}


function post_header(){
 return `
  <div class="post-header"></div>
 `
}


function footer(){
 return `
  <div class="footer"></div>
 `
}



function post_list(){
 return `
   <div class="post-list"></div>
 `
}


module.exports = { side, header, post_header, footer, post_list }






