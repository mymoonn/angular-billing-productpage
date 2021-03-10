import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.scss']
})
export class ProductpageComponent implements OnInit {
  productpage: any = [];
  name = "";
  price = "";
  addproduct() {
    if (this.name === "" || this.price === "") {
      alert("invalid data");
      return;
    }
    this.productpage.push(({ name: this.name, price: this.price }));
    localStorage.setItem('product',JSON.stringify(this.productpage));
  }
  
  deleteRow(x:any){
    var delBtn = confirm(" Do you want to delete ?");
    if ( delBtn == true ) {
      this.productpage.splice(x, 1 );
    }   
  }
  constructor() {
      let a=localStorage.getItem('product');
      if(a){
this.productpage=JSON.parse(a);
      }
   }

  ngOnInit(): void {
  }

}
