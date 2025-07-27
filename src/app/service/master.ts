import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse } from '../model/interface/master';

@Injectable({
  providedIn: 'root'
})
export class Master {
  constructor(private http:HttpClient){}

  getAllDept():Observable<IApiResponse>{
    debugger;
    return this.http.get<IApiResponse>("https://projectapi.gerasim.in/api/EmployeeManagement/GetParentDepartment");
  }
}
