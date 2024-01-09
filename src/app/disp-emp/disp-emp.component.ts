import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

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

  constructor(private http: HttpClient,private sharedService: SharedService )
  {
    this.getEmployeeDetails();
  }
  
  getEmployeeDetails()
  {
    this.http.get("https://employeecrud-springboot-production.up.railway.app").subscribe((resultData: any)=>
    {
        console.log(resultData);
        this.employees=resultData;
        console.log(this.employees);
      
    });
  }
  deleteEmp(id: number)
  {
    console.log("employees.id"+id);
    
    this.http.delete("https://employeecrud-springboot-production.up.railway.app/"+id).subscribe((resultData: any)=>
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
    
    this.http.put("https://employeecrud-springboot-production.up.railway.app/"+this.editEmpDetails.id,this.editEmpDetails,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        this.getEmployeeDetails();
    });
  }
  setEmployeeData() {
    
    this.sharedService.setEmployeeData(this.getEmployeeDetails());
  }

}
