import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MessageEComponent } from './message-e/message-e.component';

const routes: Routes =[
  {path:'',component:LoginComponent},
  {path:'ME',component:MessageEComponent}
  
  
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
