

home(){
 declare -n ref=$1
 echo "
  <!DOCTYPE html>
  <html>
   <head>
    <title>${ref[title]}</title>
   </head>
   <body>
    <h1>${ref[title]}</h1>
   </body>
  </html>
 "
}
