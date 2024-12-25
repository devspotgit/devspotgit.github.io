

const { side, header, footer, post_list } = require("../page_template_parts.js")



function category_page(category_name){

 return`
  <div class="category-page">
   ${header()}
   ${side()}
   ${post_list()}
   ${footer()}
  </div>
 `
}

console.log(category_page(process.argv[2]))



