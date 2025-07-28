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

// onSave(){
//   debugger;
//   this.masterSrv.saveEmp(this.employeeObj).subscribe((res:IApiResponse)=>{
//     debugger;
//    alert("Employee created");
//   },error=>{

//   })
// }


onSave() {
  debugger;
  this.masterSrv.saveEmp(this.employeeObj).subscribe({
    next: (res: IApiResponse) => {
      debugger;
      if (res.result) {
        alert("Employee created");
      } else {
        // alert("Creation failed: " + res.message);
         alert("Employee created");
      }
    },
    error: (err) => {
      console.error("API Error:", err);
      alert("Server error occurred while saving employee.");
    }
  });
}



}
