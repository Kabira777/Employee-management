import { Component } from '@angular/core';
import { ReactiveFormsModule,FormControl,FormGroup } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeMaster } from '../../model/class/EmployeeMaster';
import { Master } from '../../service/master';
import { AsyncPipe } from '@angular/common';
import { IProject } from '../../model/interface/master';

@Component({
  selector: 'app-project-form',
  imports: [RouterLink,ReactiveFormsModule,AsyncPipe],
  templateUrl: './project-form.html',
  styleUrl: './project-form.css'
})
export class ProjectForm {

 projectForm:FormGroup=new FormGroup({});
 
 emplList$:Observable<EmployeeMaster[]>=new Observable<[]>
 
 constructor(private masterSrv:Master, private activateRoute:ActivatedRoute){
  this.emplList$=this.masterSrv.getAllEmp();
  this.initializeForm();
  this.activateRoute.params.subscribe((res:any)=>{
      if(res.id!=0){
        this.getProject(res.id)
      }
  })
 }

 initializeForm(data?:IProject){
  this.projectForm=new FormGroup({
    projectId:new FormControl(data?data.projectId:0),
    projectName:new FormControl(data?data.projectName:''),                       
    clientName:new FormControl(data?data.clientName:''),
    startDate:new FormControl(data?data.startDate:''),
    leadByEmpId:new FormControl(data?data.leadByEmpId:0),
    contactPerson:new FormControl(data?data.contactPerson:''),
    contactNo:new FormControl(data?data.contactNo:''),
    emailId:new FormControl(data?data.emailId:''),
  })
 }

  getProject(id:number) { 
   this.masterSrv.getProjectById(id).subscribe((res:IProject)=>{
  debugger;
 this.initializeForm(res); // Use API response to populate form
   },
   error=>{
    alert('API error');
   })
 }

 onSaveProject() { 
  debugger;
  const formValue=this.projectForm.value;
   this.masterSrv.saveProject(formValue).subscribe((res:IProject)=>{
   alert("Project Created");
  this.projectForm.reset();
   },
   error=>{
    alert('API error');
   })
 }


  onUpdateProject() { 
  debugger;
  const formValue=this.projectForm.value;
   this.masterSrv.updateProject(formValue).subscribe((res:IProject)=>{
   alert("Project Updated");
  this.projectForm.reset();
   },
   error=>{
    alert('API error');
   })
 } 

}
