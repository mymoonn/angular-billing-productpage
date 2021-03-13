import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-billing-page',
  templateUrl: './billing-page.component.html',
  styleUrls: ['./billing-page.component.scss']
})
export class BillingPageComponent implements OnInit {



  dateToday: number = Date.now();

  billno = 0;
  showbill = false;
  finalpage: any = [];

  grandtotal = "";

  onShowBill() {
    this.showbill = true;

    this.billno= this.billno + 1;
    return this.billno;

  }




  total = 0;

  productpage: any = [];
  billingpage: any = [];
  pname = "";
  price = 0;
  qty = 0;


  addproduct() {

    if (this.pname === "" || this.price === 0 || this.qty === 0) {
      alert("invalid data");
      return;
    }
    this.billingpage.push(
      ({ product: this.pname, price: this.price, qty: this.qty, total: this.qty * this.price }));
    localStorage.setItem('product1', JSON.stringify(this.billingpage));
    this.total += this.price * this.qty;
  }
 getgrandtotal() {
    let grandtotal = 0;
    this.billingpage.forEach((bill: any) => {
      if (bill.total) {
        grandtotal += bill.total;

      }

    })
    
   
    return grandtotal;

  }
 
  addproduct1() {
    if (this.billno === 0 || this.grandtotal === "") {
      alert("invalid data");
      return;
    }
    this.finalpage.push(({ bill: this.billno, grandtotal: this.grandtotal }));
    localStorage.setItem('billno', JSON.stringify(this.finalpage));

  }
  selectproduct() {

    const product = this.productpage.find((product: any) => product.name === this.pname);
    this.price = product.price;
   
  }

  constructor(private router:Router) {
    let a = localStorage.getItem('product');
    if (a) {
      this.productpage = JSON.parse(a);
    }

  }
  ngOnInit(): void {
  }
  goto(link:string)
{
  this.router.navigate(['/',link]);
}
}
