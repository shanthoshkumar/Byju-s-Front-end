import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-searchjob',
  templateUrl: './searchjob.component.html',
  styleUrls: ['./searchjob.component.css']
})
export class SearchjobComponent implements OnInit {
private job_pool=[];
private job_locations=[];
private job_experiences=[];
private job_companies=[];
private job_skills=[];
private experience_tosort='';
private location_tosort='';
private company_tosort='';
private skill_tosort='';
private filtered_jobs=[];
  constructor(private http:HttpClient) { 
    this.http.get("https://api.myjson.com/bins/kez8a").subscribe(result=>result['jobsfeed'].forEach(job => { //getting the whole json data from api end point
      this.job_pool.push(job);
      if(job['experience']!='')
      {
        this.job_experiences.push(job['experience']);  //getting all expereince levels from api data for adding in Drop down 
      }
      if(job['location']!='')
      {
        this.job_locations.push(job['location']);  //getting all Locations from api data for adding in Drop down 
      }
      if(job['skills']!='')
      {
        const arr=job['skills'].split(',');
        arr.find(skill=>{
          this.job_skills.push(skill);  //getting all Skill set from api data for adding in Drop down 
        })
      }
      if(job['companyname']!='')
      {
        this.job_companies.push(job['companyname']);  //getting all Comapany names from api data for adding in Drop down 
      }
  })
    );
  } 
  
  filter_experience(experience){
    this.experience_tosort='';
    this.experience_tosort=experience;    //holds the experience level to be filtered
    if(experience=='Select')
    {
      this.filtered_jobs.length=0;
      (document.getElementById('jobcount') as HTMLInputElement).innerText='0';
    }
  }

  filter_location(location){
    this.location_tosort='';
    this.location_tosort=location;  //holds the Location to be filtered
    if(location=='Select')
    {
      this.filtered_jobs.length=0;
      (document.getElementById('jobcount') as HTMLInputElement).innerText='0';
    }
  }

  filter_company(company){
    this.company_tosort='';
    this.company_tosort=company;  //holds the Company name to be filtered
    if(company=='Select')
    {
      this.filtered_jobs.length=0;
      (document.getElementById('jobcount') as HTMLInputElement).innerText='0';
    }
  }

  filter_skill(skill){
    this.skill_tosort='';
    this.skill_tosort=skill;  //holds the skill set to be filtered
    if(skill=='Select')
    {
      this.filtered_jobs.length=0;
      (document.getElementById('jobcount') as HTMLInputElement).innerText='0';
    }
  }

  filteration_using_keys(){   // Process of Filtering either experience or location or companyname or skil set to be Filtered for User
    if( (this.experience_tosort=='' || this.experience_tosort=="Select" ) && (this.location_tosort=='' || this.location_tosort=="Select") && (this.company_tosort=='' || this.company_tosort=="Select" ) && (this.skill_tosort=='' || this.skill_tosort=="Select" ) )
    {
      alert('Please Select a Keyword');
    }
    else if(this.experience_tosort!='' && this.experience_tosort!="Select" ){
      let expobj={};
      expobj['key']='experience';
      expobj['value']=this.experience_tosort;
      this.filter_using_singlekey(expobj)
    }
    else if(this.location_tosort!='' && this.location_tosort!="Select"){
      let locobj={};
      locobj['key']='location';
      locobj['value']=this.location_tosort;
      this.filter_using_singlekey(locobj);
    }
    else if(this.company_tosort!='' && this.company_tosort!="Select" ){
      let compnameobj={};
      compnameobj['key']='companyname';
      compnameobj['value']=this.company_tosort;
      this.filter_using_singlekey(compnameobj)
    }
    else if(this.skill_tosort!='' && this.skill_tosort!="Select" ){
      this.filter_using_skills(this.skill_tosort);
    }

  }

  filter_using_skills(skillset){ //Process of Filtering using Skill set
    this.filtered_jobs.length=0;
          this.job_pool.forEach(job=>{
          const arr=job['skills'].split(',');
            arr.find(skill=>{
              if(skillset==skill){
                Object.keys(job).forEach(key => {
                  if(job[key]=='')
                  {
                    job[key]="Not mentioned";
                  }   
                });
                this.filtered_jobs.push(job);
                let count:any=this.filtered_jobs.length;
                (document.getElementById('jobcount') as HTMLInputElement).innerText=count;
              }
            })
          })
  }

  filter_using_singlekey(data){ //Process of Filteration of Experience or Location or Company name
    this.filtered_jobs.length=0;
    this.job_pool.forEach(job=>{
      if(data['value']==job[data['key']])
      {
        Object.keys(job).forEach(key => {
          if(job[key]=='')
          {
            job[key]="Not mentioned";
          }   
       
        });
        this.filtered_jobs.push(job);
        let count:any=this.filtered_jobs.length;;
        (document.getElementById('jobcount') as HTMLInputElement).innerText=count;
      }
    })
  }


  ngOnInit() {
    (document.getElementById('jobcount') as HTMLInputElement).innerText='0'; //sets the default job count as 0;

  }

}
