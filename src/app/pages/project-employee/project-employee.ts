import { Component, OnInit,signal } from '@angular/core';
import { IProjectEmployee,IProject } from '../../model/interface/master';
import { Master } from '../../service/master';
import { FormGroup,FormControl,ReactiveFormsModule, FormsModule } from '@angular/forms';
import {RouterLink} from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeMaster } from '../../model/class/EmployeeMaster';
import { AsyncPipe, DatePipe,CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-employee',
  imports: [ReactiveFormsModule,AsyncPipe,DatePipe,CommonModule],
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

onUpdateProjectEmployee(): void {
  debugger;
  const formValue = this.form.value;

  this.masterSrv.updateProjectEmp(formValue).subscribe((res: IProjectEmployee) => {
    alert("Project Employee Updated");
    this.getAllData();
    this.form.reset();
    this.form.patchValue({ empProjectId: 0 }); 
  }, error => {
    alert('API error');
  });
}


onDelete(id: number): void {
  debugger;
  const isDelete = confirm("Are you sure want to delete?");
  if (isDelete) {
    this.masterSrv.deleteProjectEmp(id).subscribe(
      (res: IProjectEmployee) => {
        debugger;
        alert("Project-Employee Deleted");
        this.getAllData();
      },
      error => {
        alert("API error");
      }
    );
  } else {
    return; 
}

}



onEdit(data: IProjectEmployee): void {
  this.form.patchValue({
    empProjectId: data.empProjectId,
    projectId: data.projectId,
    empId: data.empId,
    assignedDate: data.assignedDate,
    role: data.role,
    isActive: data.isActive
  });
}

 
}
