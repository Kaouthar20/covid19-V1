import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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



import { PreventionsComponent } from './components/preventions/preventions.component';
import { PreventionComponent } from './components/preventions/prevention/prevention.component';
import { FooterComponent } from './components/footer/footer.component';
import { FaqComponent } from './components/faq/faq.component';
import { NewsComponent } from './components/news/news.component';


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

    FooterComponent,

    FaqComponent,

    NewsComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
