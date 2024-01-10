import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-prime-number',
  templateUrl: './prime-number.component.html',
  styleUrls: ['./prime-number.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, FormsModule,
    MatInputModule, MatButtonModule,MatProgressSpinnerModule,MatProgressBarModule,CommonModule],
})

export class PrimeNumberComponent {
  empname:string="";
  empemail:string="";
  _snackBar: any;
  employeeData: any;

  constructor(private http: HttpClient )
  {
  }
  employees=null;
  
  save()
  {
    console.log("this.empname :"+this.empname+"mail :"+this.empemail);
    if(this.empname=="" && this.empemail=="")
    {
      
        //this._snackBar.open("Enter Name and Designation", "❌");
       
        alert("Enter Name and Designation");
    }
    else{
    let bodyData = {
      "name" : this.empname,
      "designation" : this.empemail,
      
    };
    this.http.post("https://employeecrud-springboot-production.up.railway.app/api/employees",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        
        console.log(resultData);
        
        alert("Employee Registered Successfully");
    });
  }
  }
  // data={
  //   email:"",
  //   name:"",
  //   sum:""
  // }
  // flag:boolean=false;
  // sum="";
  // btnclick(){
  //   this.flag=!this.flag;
  //   console.log("This Event");
  //  // alert("Hi there");

  //  if(this.data.email=="" && this.data.name==""){
  //   this._snackBar.open("Please enter name and email", "✂");
  //  }else{
  //     console.log("inside else");
      
  //     this.sum=this.data.email+this.data.name;
  //     console.log("this.sum"+this.sum);
  //  }
    
  // }

  
  // constructor(private _snackBar: MatSnackBar) {}

  // openSnackBar(message: string, action: string) {
  //   this._snackBar.open(message, action);
  // }
}
  
function ngOnInit() {
  throw new Error('Function not implemented.');
}

