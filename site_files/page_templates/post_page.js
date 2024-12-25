



const { post_header } = require("../page_template_parts.js")



function post_page(post_name){
 return `
  <div class="post-page">
   ${post_header}
  </div>
 `
}

console.log(post_page(process.argv[2]))





