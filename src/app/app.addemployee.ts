import { Component,OnInit} from '@angular/core';
import {EmployeeService} from './app.employeeservice'

@Component({
selector:'add-comp',
templateUrl:'app.addemployee.html'
})

export class AddEmployeeComponent implements OnInit{



    constructor(private service:EmployeeService){

    }
    empAll:any[]=[];
    ngOnInit(){
        this.service.getAllEmployee().subscribe((data:any)=>this.empAll=data);
    }
    deleteEmp(data:number):any{
        this.empAll.splice(data,1); 
       // alert("data deleted.........");
      }
}