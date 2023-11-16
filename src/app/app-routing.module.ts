import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MethodSecComponent } from './core/components/methods/methods/method-sec/method-sec.component';
import { MethodsComponent } from './core/components/methods/methods/methods.component';
import { MethodThirdComponent } from './core/components/methods/methods/method-third/method-third.component';



const routes: Routes = [

  {
    path: '', component: MethodsComponent
  }
,
  {
    path: 'second', component: MethodSecComponent
    
  }
 ,
 {
    path: 'third', component: MethodThirdComponent
 }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
