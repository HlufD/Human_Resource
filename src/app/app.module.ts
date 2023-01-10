import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "./material/material.module";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MembersComponent } from "./componentes/members/members.component";
import { FormComponent } from "./componentes/form/form.component";
import { SideNavComponent } from './componentes/side-nav/side-nav.component';
import { HeaderComponent } from './componentes/header/header.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { DepartmentComponent } from './pages/department/department.component';
import { SalaryComponent } from './pages/salary/salary.component';
import { CompanyComponent } from './pages/company/company.component';
import { CandidatesComponent } from './pages/candidates/candidates.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent, MembersComponent, FormComponent, SideNavComponent, HeaderComponent, EmployeeComponent, DepartmentComponent, SalaryComponent, CompanyComponent, CandidatesComponent, DashboardComponent],
  entryComponents: [FormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
