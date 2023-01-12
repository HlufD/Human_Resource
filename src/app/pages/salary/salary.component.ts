import { Component, OnInit } from "@angular/core";
import { HumanResourceService } from "src/app/services/human-resource.service";
import { MatDialog } from "@angular/material/dialog";
import { SalaryFormComponent } from "src/app/componentes/salary-form/salary-form.component";

interface salary {
  id: string;
  employeType: string;
  salary: string;
}

@Component({
  selector: "app-salary",
  templateUrl: "./salary.component.html",
  styleUrls: ["./salary.component.scss"],
})
export class SalaryComponent implements OnInit {
  listOfSalary: object;
  salary: salary = { id: "", employeType: "", salary: "" };
  header = ["id", "Job Title", "Salary", "Actions"];
  editstatus: boolean = false;

  constructor(
    private service: HumanResourceService,
    private matDialog: MatDialog
  ) {}

  ngOnInit() {
    this.getSalary();
  }
  onOpenModal() {
    let dilagRef = this.matDialog.open(SalaryFormComponent, {
      data: { salary: this.salary, status: this.editstatus },
      disableClose: true,
    });
    dilagRef.afterClosed().subscribe((result) => {
      if (result.closedBy !== "close button") {
        this.salary = result.salary;
        if (result.salary.salary !== "" && result.salary.employeType !== "") {
          this.addSalary(this.salary);
        }
      }
    });
  }

  onEdit(salary: salary) {
    this.editstatus = true;
    let refDialog = this.matDialog.open(SalaryFormComponent, {
      data: { salary: salary, status: this.editstatus },
      disableClose: true,
    });
    refDialog.afterClosed().subscribe((result) => {
      this.salary = result.salary;
      if (salary.employeType !== "" && salary.salary !== "") {
        this.editSalary(this.salary.id);
        this.editstatus = false;
      }
    });
  }

  getSalary() {
    return this.service.getSlaries().subscribe((result) => {
      this.listOfSalary = result;
    });
  }
  addSalary(data: object) {
    return this.service.addSlary(data).subscribe(() => {
      this.getSalary();
    });
  }
  editSalary(id: string) {
    if (this.salary.employeType !== "" && this.salary.salary !== "") {
      return this.service.editSalary(id, this.salary).subscribe(() => {
        this.getSalary();
      });
    }
  }

  deleteSalary(id: string) {
    let result = confirm("Do you want to Delete this Salary");
    if (result)
      this.service.deleteSalary(id).subscribe(() => {
        this.getSalary();
      });
  }
}
