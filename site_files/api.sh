


declare -a collecions


parent_dir=$1


#collect all collection in collections array
for collection in `ls $parent_dir/collections`;
do
 collections+=($collection)
done


#collection all collection file in one array for each collection
for collection in ${collections[@]};
do
 declare -a $collection

 declare -n ref=$collection

 for file in `ls $parent_dir/collections/$collection`;
 do
  ref+=($file)
 done
done


#collect all the file data in one array for each file
for collection in ${collections[@]};
do
 declare -n ref=$collection

 for file in ${ref[@]};
 do
  declare -A $file

  declare -n _ref=$file

  ifs=IFS
  IFS=$'\n'

  for line in `cat $parent_dir/collections/$collection/$file`;
  do
   attribute=`echo $line | cut -d ":" -f 1`
   value=`echo $line | cut -d ":" -f 2`
   _ref[$attribute]=$value
  done

  IFS=$ifs

 done
done



