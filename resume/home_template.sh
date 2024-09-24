#!/bash/bin



home(){

 declare -n ref=$1

 skill_list=""
 for skill in "${skills[@]}"; do
  skill_list="${skill_list}<li>${skill}</li>"
 done


 educ_list=""
 for education in "${educations[@]}"; do
  declare -n _education=$education
  educ_list="
   ${educ_list}
   <li>
    <span>${_education[program]}</span>
    <span>${_education[school_name]}</span>
    <span>${_education[start_date]}-${_education[end_date]}</span>
   </li>
  "
 done


 work_list=""
 for experience in "${experiences[@]}"; do
  declare -n _experience=$experience
  declare -n _details=${_experience[job_details]}
  detail_list=""
  for detail in "${_details[@]}"; do
   detail_list="
    ${detail_list}
    <li>$detail</li>
   "
  done
  work_list="
   ${work_list}
   <div>
    <span>${_experience[company_name]}-${_experience[job_title]}</span>
    <span>${_experience[start_date]}-${_experience[end_date]}</span>
    <ul>
     ${detail_list}
    </ul>
   </div>
  "
 done


 echo "
  <!DOCTYPE html>
  <html>
   <head>
    <title>${ref[title]}</title>
    <link rel=\"stylesheet\" href=\"/resume/style.css\"/>
   </head>
   <body>
    <div class=\"main\">
     <div class=\"header\">

      <div class=\"personal-info\">
       <span>${personal_info[name]}</span>
       <div>
        <span>${personal_info[email]}</span>
        <span>${personal_info[phone]}</span>
        <span>${personal_info[address]}</span>
       </div>
      </div>

      <div class=\"summary\">
       <span>Professional Summary</span>
       <p>${personal_info[summary]}</p>
      </div>

     </div>

     <div class=\"body\">
      <div class=\"skills-educations\">

       <div class=\"skills\">
        <span>Skills</span>
        <ul>${skill_list}</ul>
       </div>

       <div class=\"educations\">
        <span>Educations</span>
        <ul>${educ_list}</ul>
       </div>

      </div>

      <div class=\"works\">
       <span>Work History</span>
       <div>${work_list}</div>
      </div>

     </div>
    </div>
   </body>
  </html>
 "
}
