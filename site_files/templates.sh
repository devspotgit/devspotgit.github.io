





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
     `header $1`
     `post_header $1`
     `side`
     `post_content $1`
     `footer`
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
    <title>${ref[name]} Websites</title>
   </head>
   <body>
    <div class=\"category-page\">
     `header $1`
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
     `header $1`
     `side`
     `all_posts`
     `footer`
    </div>
   </body>
  </html>
 "

}


