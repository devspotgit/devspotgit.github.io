#!/bin/bash




post_card(){

 declare -n _post=$1

 echo "
  <div class=\"post\">
   <img src=\"${_post[image]}\"/>
   <div>
    <span>${_post[title]}</span>
    <span>${_post[date]}</span>
    <p>${_post[content]}</p>
   </div>
   <div>
    <span>Read More</span>
    <div>
     <span>Comments</span>
     <span>${_post[comment]}</span>
    </div>
   </div>
  </div>
 "

}

intro_card(){

 echo "
  <div class=\"intro\">
   <img src=\"${intro[image]}\"/>
   <span>${intro[name]}</span>
   <p>${intro[content]}</p>
  </div>
 "

}


popular_card(){

 popular_list=""

 for item in "${popular[@]}"; do
  declare -n _item=$item
  popular_list="
   ${popular_list}
   <div>
    <img src=\"${_item[image]}\"/>
    <div>
     <span>${_item[title]}</span>
     <span>${_item[preview]}</span>
    </div>
   </div>
  "
 done

 echo "
  <div class=\"popular-posts\">
   <span>Popular Posts</span>
   <div>${popular_list}</div>
  </div>
 "

}




tag_card(){

 tag_list=""

 for item in "${tags[@]}"; do
  tag_list="
   ${tag_list}
   <span>${item}</span>
  "
 done

 echo "
  <div class=\"tags\">
   <span>Tags</span>
   <div>${tag_list}</div>
  </div>
 "

}



home(){

 declare -n _home=$1

 post_list=""

 for item in "${posts[@]}"; do
  post_list="
   ${post_list}
   `post_card $item`
  "
 done

 echo "
  <!DOCTYPE html>
  <html>

   <head>
    <meta charset=\"UTF-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <link rel=\"stylesheet\" href=\"/corine/style.css\">
    <title>${_home[title]}</title>
   </head>

   <body>
    <div class=\"header\">${_home[title]}</div>

    <div class=\"body\">
     <div class=\"post-list\">${post_list}</div>
     <div class=\"side-content\">
      `intro_card`
      `popular_card`
      `tag_card`
     </div>
    </div>

    <div class=\"footer\">
     <span>Previous</span>
     <span>Next</span>
    </div>

    <script src=\"/corine/static_files/script.js\"></script>
   </body>

  </html>
 "

}
