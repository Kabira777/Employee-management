import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse } from '../model/interface/master';
import {EmployeeMaster} from '../model/class/EmployeeMaster';

@Injectable({
  providedIn: 'root'
})
export class Master {
   constructor(private http:HttpClient){}

  apiUrl: string = "/api/EmployeeManagement/";


  getAllDept():Observable<IApiResponse>{
   
     return this.http.get<IApiResponse>(`${this.apiUrl}GetParentDepartment`);
  }
  
   getChildDeptById(deptId:number):Observable<IApiResponse>{
   
     return this.http.get<IApiResponse>(`${this.apiUrl}GetChildDepartmentByParentId?deptId=${deptId}`);
  }

  saveEmp(obj:EmployeeMaster):Observable<IApiResponse>{
   debugger;
     return this.http.post<IApiResponse>(`${this.apiUrl}CreateEmployee`,obj);
  }

    getAllEmp():Observable<EmployeeMaster[]>{
   
     return this.http.get<EmployeeMaster[]>(`${this.apiUrl}GetAllEmployees`);
  }
}
