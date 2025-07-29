import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { IProject } from '../../model/interface/master';
import { Master } from '../../service/master';

@Component({
  selector: 'app-project',
  imports: [ReactiveFormsModule],
  templateUrl: './project.html',
  styleUrl: './project.css'
})
export class Project {

  projectList:IProject[]=[];

  constructor(private masterSrv:Master, private router:Router){
  }

  ngOnInit():void{
    this.getProjects();
  }

  getProjects(){
    this.masterSrv.getAllProjects().subscribe((res:IProject[])=>{
      this.projectList=res;
    })
  }

  onEdit(id:number){
    this.router.navigate(['new-project',id])
    
  }

  onDelete(id:number){

  }


}

