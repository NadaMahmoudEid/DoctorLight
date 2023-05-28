import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Modules/auth/login/login.component';
import { RegisterComponent } from './Modules/auth/register/register.component';
import { HomepageComponent } from './Modules/home/homepage/homepage.component';
import { AdminDashBoardComponent } from './Modules/doctor/admin-dash-board/admin-dash-board.component';
import { KnowYourDocComponent } from './Modules/doctor/know-your-doc/know-your-doc.component';
import { ProfileComponent } from './Modules/user/profile/profile.component';
import { PlanComponent } from './Modules/user/plan/plan.component';

const routes: Routes = [
    {path:'',component:HomepageComponent},
    
    {path:'Login',component:LoginComponent},
    {path:'Register',component:RegisterComponent},
    {path:'DoctorDashboard',component:AdminDashBoardComponent},
    {path:'KD',component:KnowYourDocComponent},
    {path:'Home',component:HomepageComponent},
    {path:'Profile',component:ProfileComponent},
    {path:'Plan',component:PlanComponent},
    {path:'**',component:HomepageComponent},
    

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
