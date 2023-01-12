import { Component, OnInit } from "@angular/core";
import { HumanResourceService } from "src/app/services/human-resource.service";
import { MatDialog } from "@angular/material/dialog";
import { CompnayFormComponent } from "src/app/componentes/compnay-form/compnay-form.component";

interface company {
  id: string;
  name: string;
  No_of_Employee: string;
}

@Component({
  selector: "app-company",
  templateUrl: "./company.component.html",
  styleUrls: ["./company.component.scss"],
})
export class CompanyComponent implements OnInit {
  companies: object;
  header = ["id", "Name", "No of Employee ", "Actions"];
  company: company = { id: "", name: "", No_of_Employee: "" };
  editstatus: boolean = false;

  constructor(
    private service: HumanResourceService,
    private matDialog: MatDialog
  ) {}

  ngOnInit() {
    this.getCompanies();
  }
  openDialog() {
    let dialogRef = this.matDialog.open(CompnayFormComponent, {
      data: { company: this.company, status: this.editstatus },
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result.closedBy !== "close button") {
        if (result.company.name !== "" && result.company.No_of_Employee) {
          this.addCompany(result.company);
        }
      }
    });
  }

  onEdit(company: company) {
    this.editstatus = true;
    let dialogRef = this.matDialog.open(CompnayFormComponent, {
      data: { company: company, status: this.editstatus },
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.company = result.company;
      if (this.company.No_of_Employee !== "" && this.company.name !== "") {
        this.editCompany(this.company.id);
        this.editstatus = false;
      }
    });
  }
  getCompanies() {
    return this.service.getCompany().subscribe((result) => {
      this.companies = result;
    });
  }
  addCompany(data: object) {
    return this.service.addComapny(data).subscribe(() => {
      this.getCompanies();
    });
  }
  editCompany(id: string) {
    if (this.company.No_of_Employee !== "" && this.company.name !== "") {
      return this.service.editCompany(id, this.company).subscribe(() => {
        this.getCompanies();
      });
    }
  }
  deleteCompany(id: string) {
    let result = confirm("Do you want do Delete this Company.");
    if (result) {
      this.service.deleteCompany(id).subscribe(() => {
        this.getCompanies();
      });
    }
  }
}
