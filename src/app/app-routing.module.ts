import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PreventionComponent } from './components/prevention/prevention.component';
import { SymptomsComponent } from './components/symptoms/symptoms.component';
import { LoginComponent } from './contact/login/login.component';
import { RegisterComponent } from './contact/register/register.component';
import { AboutCoronaComponent } from './components/about-corona/about-corona.component';


const routes: Routes = [
{path : "", component : HomeComponent},
{path : "aboutCorona", component : AboutCoronaComponent},
{path : "prevention", component : PreventionComponent},
{path : "symptoms", component : SymptomsComponent},
{path : "login", component : LoginComponent},
{path : "register", component : RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
