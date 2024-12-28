


#collect posts from a category
#accept one parameter, category name $1 - category
#echo list of posts
category_posts(){

 declare -a tmp

 for post in ${posts[@]};
 do

  declare -n ref=$post

  if [ ${ref[category]} -eq $1 ]; then
   tmp+=($post)
  fi

 done

 echo ${tmp[@]}

}



#compare two posts
#accept 2 parameters post1 - $1 and post2 - $2
#return 1 if post1 date > post2 date
#return 2 if post1 date < post2 date
#return 0 if post1 date = post2 date
compare_posts(){

 declare -n ref_1=$1

 declare -n ref_2=$2

 y_1=`echo ${ref_1[date]}|cut -d "-" -f 1`

 y_2=`echo ${ref_2[date]}|cut -d "-" -f 1`

 if [ $y_1 -gt $y_2 ]; then
  return 1

 elif [ $y_1 -lt $y_2 ]; then
  return 2

 elif [ $y_1 -eq $y_2 ]; then
  m_1=`echo ${ref_1[date]}|cut -d "-" -f 2`

  m_2=`echo ${ref_2[date]}|cut -d "-" -f 2`

  if [ $m_1 -gt $m_2 ]; then
   return 1

  elif [ $m_1 -lt $m_2 ]; then
   return 2

  elif [ $m_1 -eq $m_2 ]; then
   d_1=`echo ${ref_1[date]}|cut -d "-" -f 3`

   d_2=`echo ${ref_1[date]}|cut -d "-" -f 3`

   if [ $d_1 -gt $d_2 ]; then
    return 1

   elif [ $d_1 -lt $d_2 ]; then
    return 2

   elif [ $d_1 -eq $d_2 ]; then
    return 0

   fi

  fi

 fi

}




#sort all posts
#echo sorted list
sort_posts(){




}
