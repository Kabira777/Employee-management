import { Component,signal } from '@angular/core';
import { IDashboardResponse } from '../../model/interface/master';
import { Master } from '../../service/master';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
dashboardData:any;

count = 0;
target = 100;


constructor(private masterSrv:Master){
  
}

ngOnInit():void{
let interval = setInterval(() => {
    if (this.count < this.target) this.count++;
    else clearInterval(interval);
  }, 10);

this.masterSrv.getDashboardData().subscribe((res:any)=>{
this.dashboardData=res;
})
}

}
