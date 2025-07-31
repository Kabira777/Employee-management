import { Component ,OnInit,signal} from '@angular/core';
import { Master } from '../../service/master';
import { IApiResponse, IParentDept,IChildDept } from '../../model/interface/master';
import {FormsModule} from '@angular/forms';
import {EmployeeMaster} from '../../model/class/EmployeeMaster';

@Component({
  selector: 'app-employee',
  imports: [FormsModule],
  templateUrl: './employee.html',
  styleUrls: ['./employee.css']
})
export class Employee implements OnInit {
isFormVisible=false;
constructor(private masterSrv:Master){}
parentDeptList=signal<IParentDept[]>([]);
employeeList=signal<EmployeeMaster[]>([]);
childDeptList=signal<IChildDept[]>([]);
parentDeptId:number=0;
employeeObj:EmployeeMaster=new EmployeeMaster();

showOrHide(action:boolean){
  this.isFormVisible=action;
}

ngOnInit(): void {
this.getParentDept();
this.getEmployees();
}

getParentDept(){
this.masterSrv.getAllDept().subscribe((res:IApiResponse)=>{
 this.parentDeptList.set(res.data);
})
}

getEmployees(){
this.masterSrv.getAllEmp().subscribe((res:EmployeeMaster[])=>{
 this.employeeList.set(res);
})
}

onParentDeptChange() {
  this.masterSrv.getChildDeptById(this.parentDeptId).subscribe((res: IApiResponse) => {
    this.childDeptList.set(res.data);
  });

}


onSave() {
  
  this.masterSrv.saveEmp(this.employeeObj).subscribe({
    next: (res: IApiResponse) => {
      
      if (res.result) {
        alert("Employee created");
        this.getEmployees();
        this.employeeObj=new EmployeeMaster();
      } else {
        // alert("Creation failed: " + res.message);
         alert("Employee created");
         this.getEmployees();
         this.employeeObj=new EmployeeMaster();
      }
    },
    error: (err) => {
      console.error("API Error:", err);
      alert("Server error occurred while saving employee.");
    }
  });
}


onEdit(data:EmployeeMaster){
  this.employeeObj=data;
  this.isFormVisible=true;
}

onUpdate(){
this.masterSrv.updateEmp(this.employeeObj).subscribe((res:IApiResponse)=>{
debugger;
alert("Employee updated");
},error=>{
alert("API error");
})
}

// onUpdate() {
//   this.masterSrv.updateEmp(this.employeeObj).subscribe({
//     next: (res: IApiResponse) => {
//       if (res.result) {
//         alert("Employee updated");
//       } else {
//         alert("Update failed: " + res.message);
//       }
      
//       this.getEmployees();
//       this.employeeObj = new EmployeeMaster();
//     },
//     error: (err) => {
//       console.error("API Error:", err);
//       alert("Server error occurred while saving employee.");
//     }
//   });
// }



onDelete(id: number): void {
  debugger;
  const isDelete = confirm("Are you sure want to delete?");
  if (isDelete) {
    this.masterSrv.deleteEmp(id).subscribe(
      (res: IApiResponse) => {
        debugger;
        alert("Employee Deleted");
        this.getEmployees();
      },
      error => {
        alert("API error");
      }
    );
  } else {
    return; 
}

}



}
