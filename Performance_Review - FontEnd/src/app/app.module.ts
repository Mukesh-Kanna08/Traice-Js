import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './services/employee.service';

import { Routes, RouterModule} from '@angular/router';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeStatusComponent } from './components/employee-status/employee-status.component';
import { EmployeeDescComponent } from './components/employee-desc/employee-desc.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { LoginComponent } from './components/login/login.component';
import { LoginStatusComponent } from './components/login-status/login-status.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { RemoveEmployeeComponent } from './components/remove-employee/remove-employee.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { FeedbackDetailsComponent } from './components/feedback-details/feedback-details.component';



const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'feedbackdetails', component: FeedbackDetailsComponent},
  {path: 'add-employee', component: AddEmployeeComponent},
  {path: 'remove-employee/:id', component: RemoveEmployeeComponent},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent},
  {path: 'employee-details', component: EmployeeDetailsComponent},
  {path: 'employee/:id', component: EmployeeDetailsComponent},
  {path: 'search/:keyword', component: EmployeeListComponent},
  {path: 'category/:id', component: EmployeeListComponent},
  {path: 'category', component: EmployeeListComponent},
  {path: 'employee', component: EmployeeListComponent},
  {path: '', redirectTo: '/employee', pathMatch: 'full'},
  {path: '**', redirectTo: '/employee', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    EmployeeStatusComponent,
    FeedbackComponent,
    LoginComponent,
    LoginStatusComponent,
    UpdateEmployeeComponent,
    RemoveEmployeeComponent,
    AddEmployeeComponent,
    FeedbackDetailsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
