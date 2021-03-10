import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.scss']
})
export class ProductpageComponent implements OnInit {
  productpage:any=[];
name ="";
price="";
addproduct()
{
if (this.name==="" || this.price===""){
 alert("invalid data");
 return;
}
this.productpage.push(({name:this.name,price:this.price}))
}


  constructor() { }

  ngOnInit(): void {
  }

}




