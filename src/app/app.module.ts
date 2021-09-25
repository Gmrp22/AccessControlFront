import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { UsersComponent } from './components/Users/users/users.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { WeekReportComponent } from './components/WeekReport/week-report/week-report.component';
import { FormComponent } from './components/Form/form/form.component';
import { AccessReportComponent } from './components/AccessReport/access-report/access-report.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NavbarComponent,
    WeekReportComponent,
    FormComponent,
    AccessReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
