import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListOfInstrumentsComponent } from './list-of-instruments/list-of-instruments.component';
import { CreateNewInstrumentComponent } from './create-new-instrument/create-new-instrument.component';
import { HomeComponent } from './home/home.component';
import { NewInstrumentComponent } from './new-instrument/new-instrument.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { YourDetailsComponent } from './your-details/your-details.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListOfInstrumentsComponent,
    CreateNewInstrumentComponent,
    HomeComponent,
    NewInstrumentComponent,
    LoginComponent,
    LogoutComponent,
    YourDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
