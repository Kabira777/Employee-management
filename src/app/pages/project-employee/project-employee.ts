import { Component, OnInit,signal } from '@angular/core';
import { IProjectEmployee,IProject } from '../../model/interface/master';
import { Master } from '../../service/master';
import { FormGroup,FormControl,ReactiveFormsModule, FormsModule } from '@angular/forms';
import {RouterLink} from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeMaster } from '../../model/class/EmployeeMaster';
import { AsyncPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-project-employee',
  imports: [ReactiveFormsModule,AsyncPipe,DatePipe],
  templateUrl: './project-employee.html',
  styleUrl: './project-employee.css'
})
export class ProjectEmployee implements OnInit{

projectEmployeeList=signal<IProjectEmployee[]>([]);  
form:FormGroup=new FormGroup({});

projectList$:Observable<IProject[]>=new Observable<IProject[]>;
EmpList$:Observable<EmployeeMaster[]>=new Observable<EmployeeMaster[]>;

constructor(private masterSrv:Master){
this.initializeForm();
this.projectList$=this.masterSrv.getAllProjects();
this.EmpList$=this.masterSrv.getAllEmp();
}

initializeForm(){
  this.form=new FormGroup({
  empProjectId: new FormControl(0),
  projectId: new FormControl(0),
  empId: new FormControl(0),
  assignedDate:new FormControl(''),
  role: new FormControl(''),
  isActive: new FormControl(false),
  })
}
ngOnInit(): void {
  this.getAllData();
}

getAllData(){
this.masterSrv.getProjectEmp().subscribe((res:IProjectEmployee[])=>{
  this.projectEmployeeList.set(res);
})
}

 onSave() { 
  debugger;
  const formValue=this.form.value;
   this.masterSrv.saveProjectEmp(formValue).subscribe((res:IProject)=>{
   alert("Employee added to Project Created");
   this.getAllData();
  this.form.reset();
   },
   error=>{
    alert('API error');
   })
 }

 
}
