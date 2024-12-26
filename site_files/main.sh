

#!/bin/bash



src_dir=$1

dest_dir=$2


source $src_dir/api.sh $src_dir

source $src_dir/template_parts.sh

source $src_dir/templates.sh




if [ -f $dest_dir/site_map ]; then

 ifs=$IFS
 IFS=$'\n'

 for line in `cat $dest_dir/site_map`;

 do


 done

else

 touch $dest_dir/site_map

fi





for collection in  ${collections[@]};

do

 declare -n collection_ref=$collection

 for item in ${collection_ref[@]};

 do

  declare -n item_ref=$item

  file_content=`${item_ref[template]} $item`

  mkdir -p $dest_dir/${item_ref[url]}

  echo file_content > $dest_dir/${item_ref[url]}/index.html

  echo $dest_dir/${item_ref[url]} >> $dest_dir/site_map


 done


done











