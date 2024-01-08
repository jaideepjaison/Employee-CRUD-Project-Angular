import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-disp-emp',
  templateUrl: './disp-emp.component.html',
  styleUrls: ['./disp-emp.component.css']
})
export class DispEmpComponent {
  employees=null;

  editEmpDetails={
    "id":"",
    "name": "",
    "designation": ""
  };

  constructor(private http: HttpClient )
  {
    this.getEmployeeDetails();
  }

  getEmployeeDetails()
  {
    this.http.get("http://localhost:8080/api/employees").subscribe((resultData: any)=>
    {
        console.log(resultData);
        this.employees=resultData;
        console.log(this.employees);
      
    });
  }
  deleteEmp(id: number)
  {
    console.log("employees.id"+id);
    
    this.http.delete("http://localhost:8080/api/employees/"+id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        this.getEmployeeDetails();
    });
  }

  editEmp(emp:any)
  {
    this.editEmpDetails=emp;
    
  }
  finalUpdateEmp(){
    console.log("Inside final Update");
    
    this.http.put("http://localhost:8080/api/employees/"+this.editEmpDetails.id,this.editEmpDetails,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        this.getEmployeeDetails();
    });
  }

}
