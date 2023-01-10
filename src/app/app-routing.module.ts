import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CandidatesComponent } from "./pages/candidates/candidates.component";
import { CompanyComponent } from "./pages/company/company.component";
import { DepartmentComponent } from "./pages/department/department.component";
import { EmployeeComponent } from "./pages/employee/employee.component";
import { SalaryComponent } from "./pages/salary/salary.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";

const routes: Routes = [
  { path: "", component: DashboardComponent },
  {
    path: "employee",
    component: EmployeeComponent,
  },
  {
    path: "candidate",
    component: CandidatesComponent,
  },
  {
    path: "department",
    component: DepartmentComponent,
  },
  {
    path: "salary",
    component: SalaryComponent,
  },
  {
    path: "company",
    component: CompanyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
