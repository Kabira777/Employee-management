import { Component ,OnInit,signal} from '@angular/core';
import { Master } from '../../service/master';
import { IApiResponse, IParentDept } from '../../model/interface/master';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.html',
  styleUrl: './employee.css'
})
export class Employee implements OnInit {
isFormVisible=false;
constructor(private masterSrv:Master){}
parentDeptList=signal<IParentDept[]>([]);

showOrHide(action:boolean){
  this.isFormVisible=action;
}

ngOnInit(): void {
this.getParentDept();
}

// getParentDept(){

// this.masterSrv.getAllDept().subscribe((res:IApiResponse)=>{
//  this.parentDeptList.set(res.data);
// })
// }

getParentDept() {
  this.masterSrv.getAllDept().subscribe((res: IApiResponse) => {
    console.log('API Response:', res);

    if (res.result && res.data?.length) {
      this.parentDeptList.set(res.data);
    } else {
      console.warn('Empty or invalid department list!');
    }
  });
}

}
