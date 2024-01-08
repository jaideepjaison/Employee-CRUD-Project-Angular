import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-print-list',
  templateUrl: './print-list.component.html',
  styleUrls: ['./print-list.component.css']
})
export class PrintListComponent {

  

  //public fname:string="";
  mylist : SalesPerson[]=[
    new SalesPerson("Ram","Kumar",2000),
    new SalesPerson("Jaison","Lobo",5000),
    new SalesPerson("Robert","Dev",3000)
  ];

  
}
