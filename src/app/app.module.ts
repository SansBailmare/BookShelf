import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {MatCardModule,MatButtonModule} from '@angular/material'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { ShelfComponent } from './shelf/shelf.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';
import { ValidationService } from './validation.service';
import { ControlMessages } from './control-messages/control-messages.component';
import { RegistertrialComponent } from './registertrial/registertrial.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    RegisterComponent,
    ShelfComponent,
    AboutusComponent,
    HomepageComponent,
    ControlMessages,
    RegistertrialComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [ ValidationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
