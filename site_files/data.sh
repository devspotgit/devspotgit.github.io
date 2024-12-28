


declare -a collecions

parent_dir=$1

unset IFS

#collect all collection in collections array
collections=(`ls $parent_dir/collections`)


#collection all collection file in one array for each collection
for collection in ${collections[@]}; do

 declare -a $collection

 declare -n ref=$collection

 ref=(`ls $parent_dir/collections/$collection`)

done


#collect all the file data in one array for each file
for collection in ${collections[@]}; do

 declare -n ref=$collection

 for file in ${ref[@]}; do

  declare -A $file

  declare -n _ref=$file

  IFS=$'\n'

  for line in `cat $parent_dir/collections/$collection/$file`; do

   attribute=`echo $line | cut -d ":" -f 1`

   value=`echo $line | cut -d ":" -f 2`

   _ref[$attribute]=$value

  done

  unset IFS

 done

done





