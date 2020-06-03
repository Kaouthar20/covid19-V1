import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitreComponent } from './components/titre/titre.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutCoronaComponent } from './components/about-corona/about-corona.component';
import { SymptomsComponent } from './components/symptoms/symptoms.component';

import { RegisterComponent } from './components/contact/register/register.component';
import { LoginComponent } from './components/contact/login/login.component';
import { SymptomComponent } from './components/symptoms/symptom/symptom.component';


import { HighFeverComponent } from './components/symptoms/high-fever/high-fever.component';
import { PneumoniaComponent } from './components/symptoms/pneumonia/pneumonia.component';
import { ShortnessOfBreathComponent } from './components/symptoms/shortness-of-breath/shortness-of-breath.component';
import { VomitingComponent } from './components/symptoms/vomiting/vomiting.component';
import { DiarrheaComponent } from './components/symptoms/diarrhea/diarrhea.component';
import { CoughingsComponent } from './components/symptoms/coughings/coughings.component';
import { PreventionsComponent } from './components/preventions/preventions.component';
import { PreventionComponent } from './components/preventions/prevention/prevention.component';


@NgModule({
  declarations: [
    AppComponent,
    TitreComponent,
    NavbarComponent,
    HomeComponent,
    AboutCoronaComponent,
    SymptomsComponent,

    RegisterComponent,
    LoginComponent,

    SymptomComponent,

    PreventionsComponent,

    PreventionComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
