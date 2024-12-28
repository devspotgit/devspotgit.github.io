

#!/bin/bash

src_dir=$1

dest_dir=$2


source $src_dir/data.sh $src_dir

source $src_dir/api.sh

source $src_dir/template_parts.sh

source $src_dir/templates.sh



#remove existing file
if [ -f $dest_dir/site_map ]; then

 ifs=$IFS
 IFS=$'\n'

 for line in `cat $dest_dir/site_map`;
 do

  if [ $line == "/" ]; then
   rm $dest_dir/index.html
  else
   rm -r $dest_dir/$line
  fi

 done

 IFS=$ifs

 rm $dest_dir/site_map
 touch $dest_dir/site_map

else

 touch $dest_dir/site_map

fi





#create site files
for collection in  ${collections[@]};
do

 declare -n collection_ref=$collection

 for item in ${collection_ref[@]};
 do

  declare -n item_ref=$item

  if [ ! -z "${item_ref[template]}" ]; then

   file_content=`${item_ref[template]} $item`

   mkdir -p $dest_dir/${item_ref[url]}

   echo "$file_content" > $dest_dir/${item_ref[url]}/index.html

   echo ${item_ref[url]} >> $dest_dir/site_map

  fi

 done

done











