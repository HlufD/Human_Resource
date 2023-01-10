import { Component, OnInit } from "@angular/core";
import { HumanResourceService } from "src/app/services/human-resource.service";
@Component({
  selector: "app-company",
  templateUrl: "./company.component.html",
  styleUrls: ["./company.component.scss"],
})
export class CompanyComponent implements OnInit {
  companies: object;
  header = ["id", "Name", "No of Employee ", "Actions"];
  constructor(private service: HumanResourceService) {}

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    return this.service.getCompany().subscribe((result) => {
      this.companies = result;
    });
  }
  addCompany() {}
  editCompany() {}
  deleteCompany() {}
}
