import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { SymptomsComponent } from './components/symptoms/symptoms.component';
import { LoginComponent } from './components/contact/login/login.component';
import { RegisterComponent } from './components/contact/register/register.component';
import { AboutCoronaComponent } from './components/about-corona/about-corona.component';
import { PreventionsComponent } from './components/preventions/preventions.component';
import { FooterComponent } from './components/footer/footer.component';


const routes: Routes = [
{path : "", component : HomeComponent},
{path : "aboutCorona", component : AboutCoronaComponent},
{path : "preventions", component : PreventionsComponent},
{path : "symptoms", component : SymptomsComponent},
{path : "login", component : LoginComponent},
{path : "register", component : RegisterComponent},
{path : "footer", component : FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
