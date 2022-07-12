import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateNewInstrumentComponent } from './create-new-instrument/create-new-instrument.component';
import { HomeComponent } from './home/home.component';
import { ListOfInstrumentsComponent } from './list-of-instruments/list-of-instruments.component';
import { LoginComponent } from './login/login.component';
import { NewInstrumentComponent } from './new-instrument/new-instrument.component';
import { YourDetailsComponent } from './your-details/your-details.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'List', component:ListOfInstrumentsComponent},
  {path: 'create', component:NewInstrumentComponent},
  {path: 'createe', component:CreateNewInstrumentComponent},
  {path: 'login', component:LoginComponent},
  {path: 'details', component: YourDetailsComponent},
  { path: 'dav', loadChildren: () => import('./dav/dav.module').then(m => m.DavModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
