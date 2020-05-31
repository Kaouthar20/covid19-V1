import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitreComponent } from './components/titre/titre.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutCoronaComponent } from './components/about-corona/about-corona.component';
import { SymptomsComponent } from './components/symptoms/symptoms.component';
import { PreventionComponent } from './components/prevention/prevention.component';
import { RegisterComponent } from './contact/register/register.component';
import { LoginComponent } from './contact/login/login.component';
import { SymptomComponent } from './symptom/symptom.component';

@NgModule({
  declarations: [
    AppComponent,
    TitreComponent,
    NavbarComponent,
    HomeComponent,
    AboutCoronaComponent,
    SymptomsComponent,
    PreventionComponent,
    RegisterComponent,
    LoginComponent,
    SymptomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
