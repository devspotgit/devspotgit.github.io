





header(){

 echo "
  <div class=\"header\">


  </div>
 "

}


footer(){

 echo "
  <div class=\"footer\">
   <a href=\"/\">DevSpot</a>
  </div>
 "

}

post_header(){

 echo "
  <div class=\"post-header\">


  </div>
 "

}

post_content(){

 echo "
  <div class=\"post-content\">


  </div>
 "

}


side(){

 declare html=""

 for category in categories; do
  declare -n ref=$category
  html="$html <a href=\"${ref[url]}\">${ref[name]}</a>"
 done

 echo "
  <div class=\"side\">
   <span></span>
   <div class=\"categories\">
    $html
   </div>
  </div>
 "
}



category_posts(){

 echo "
  <div class=\"post-list\">


  </div>
 "
}


all_posts(){

 echo "
  <div class=\"post-list\">


  </div>
 "
}















