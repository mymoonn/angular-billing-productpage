import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingPageComponent} from './billing-page/billing-page.component';
import { ProductpageComponent} from './productpage/ProductpageComponent';
import {FinalPageComponent} from './final-page/final-page.component';
import {  HomeComponent} from './home/home.component';
import {DatePipe} from '@angular/common';



const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"productpage",component:ProductpageComponent},
  {path:"billingpage",component:BillingPageComponent},
  {path:"final-page",component:FinalPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
