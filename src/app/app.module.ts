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


import { HighFeverComponent } from './components/symptoms/high-fever/high-fever.component';
import { PneumoniaComponent } from './components/symptoms/pneumonia/pneumonia.component';
import { ShortnessOfBreathComponent } from './components/symptoms/shortness-of-breath/shortness-of-breath.component';
import { VomitingComponent } from './components/symptoms/vomiting/vomiting.component';
import { DiarrheaComponent } from './components/symptoms/diarrhea/diarrhea.component';
import { CoughingsComponent } from './components/symptoms/coughings/coughings.component';

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
    
    HighFeverComponent,
    PneumoniaComponent,
    ShortnessOfBreathComponent,
    VomitingComponent,
    DiarrheaComponent,
    CoughingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
