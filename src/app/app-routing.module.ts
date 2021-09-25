import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/Users/users/users.component';
import { AccessReportComponent } from './components/AccessReport/access-report/access-report.component';
import { WeekReportComponent } from './components/WeekReport/week-report/week-report.component';
import { FormComponent } from './components/Form/form/form.component';


const routes: Routes = [
  { path: '', component:UsersComponent  },
  { path: 'week_report', component:WeekReportComponent  },
  { path: 'access_report', component:AccessReportComponent  },
  { path: 'new_user', component:FormComponent  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
