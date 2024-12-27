






post_page(){

 declare -n ref=$1

 echo "
  <!DOCTYPE html>
  <html>
   <head>
    <link rel=\"stylesheet\" href=\"/static/css/main.css\"/>
    <title>${ref[name]}</title>
   </head>
   <body>
    <div class=\"post-page\">
     `post_header `
     `post_content $1`
    </div>
   </body>
  </html>
 "

}


home_page(){

 declare -n ref=$1

 echo "
  <!DOCTYPE html>
  <html>
   <head>
    <link rel=\"stylesheet\" href=\"/static/css/main.css\"/>
    <title>${ref[name]}</title>
   </head>
   <body>
    <div class=\"home-page\">Home</div>
   </body>
  </html>
 "

}


category_page(){

 declare -n ref=$1

 echo "
  <!DOCTYPE html>
  <html>
   <head>
    <link rel=\"stylesheet\" href=\"/static/css/main.css\"/>
    <title>${ref[name]}</title>
   </head>
   <body>
    <div class=\"category-page\">
     `header`
     `side`
     `category_posts $1`
     `footer`
    </div>
   </body>
  </html>
 "

}


all_post_page(){

 declare -n ref=$1

 echo "
  <!DOCTYPE html>
  <html>
   <head>
    <link rel=\"stylesheet\" href=\"/static/css/main.css\"/>
    <title>${ref[name]}</title>
   </head>
   <body>
    <div class=\"all-post-page\">
     `header`
     `side`
     `all_posts`
     `footer`
    </div>
   </body>
  </html>
 "

}


