import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-billing-page',
  templateUrl: './billing-page.component.html',
  styleUrls: ['./billing-page.component.scss']
})


export class BillingPageComponent implements OnInit {
  productname: any = ['mango','banana','apple','orange','pineapple']
  
  total =0;
  billingpage: any = [];
  pname = "";
  price = 0;
  qty = 0;
  productpage: any = [];

  addproduct() {
    if (this.pname === "" || this.price === 0 || this.qty === 0) {
      alert("invalid data");
      return;
    }
    this.billingpage.push(({ product: this.pname, price: this.price, qty: this.qty ,total: this.qty * this.price}));
    localStorage.setItem('product', JSON.stringify(this.billingpage));
    this.total += this.price * this.qty;


  }

 

  constructor() {
    let a = localStorage.getItem('product');
    if (a) {
      this.productpage = JSON.parse(a);
    }
  }
  
  ngOnInit(): void {
  }
  





}
