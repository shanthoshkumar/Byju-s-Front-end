import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listjob',
  templateUrl: './listjob.component.html',
  styleUrls: ['./listjob.component.css']
})
export class ListjobComponent implements OnInit {
  private job_pool=[];
  constructor(private http:HttpClient) { 
    this.http.get("https://api.myjson.com/bins/kez8a").subscribe(result=>result['jobsfeed'].forEach(job => {
      Object.keys(job).forEach(key => {
        if(job[key]=='')
        {
          job[key]="Not mentioned";
        }   
     
      });
      this.job_pool.push(job);
  })
    );
  }
  ngOnInit() {
    
   }

}
