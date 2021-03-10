import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-final-page',
  templateUrl: './final-page.component.html',
  styleUrls: ['./final-page.component.scss']
})
export class FinalPageComponent implements OnInit {

 
 billingpage: any = [];
  finalpage: any = [];
  

  bill = "";
  amount = "";
  addproduct() {
    if (this.bill === "" || this.amount === "") {
      alert("invalid data");
      return;
    }
    this.finalpage.push(({ bill: this.bill, amount: this.amount }));
    localStorage.setItem('product',JSON.stringify(this.finalpage));
  }
  
  deleteRow(x:any){
    var delBtn = confirm(" Do you want to delete ?");
    if ( delBtn == true ) {
      this.finalpage.splice(x, 1 );
    }   
  }
  constructor() {
      let a=localStorage.getItem('product');
      if(a){
this.billingpage=JSON.parse(a);
      }
   }

  ngOnInit(): void {
  }

}
