import { Component, OnInit } from "@angular/core";
import { HumanResourceService } from "src/app/services/human-resource.service";

@Component({
  selector: "app-salary",
  templateUrl: "./salary.component.html",
  styleUrls: ["./salary.component.scss"],
})
export class SalaryComponent implements OnInit {
  listOfSalary: object;
  header = ["id", "Job Title", "Salary", "Actions"];
  constructor(private service: HumanResourceService) {}

  ngOnInit() {
    this.getSalary();
  }

  getSalary() {
    return this.service.getSlary().subscribe((result) => {
      this.listOfSalary = result;
    });
  }
  addSalary() {}
  editSalary() {}
  deleteSalary() {}
}
