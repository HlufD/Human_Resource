import { Component, OnInit } from "@angular/core";
import { HumanResourceService } from "src/app/services/human-resource.service";

@Component({
  selector: "app-department",
  templateUrl: "./department.component.html",
  styleUrls: ["./department.component.scss"],
})
export class DepartmentComponent implements OnInit {
  departments: object;
  header = ["id", "Name", "Department Code", "Actions"];
  constructor(private service: HumanResourceService) {}

  ngOnInit() {
    this.getdepartments();
  }
  getdepartments() {
    return this.service.getDepartments().subscribe((result: any) => {
      this.departments = result;
    });
  }
  addDepartment() {}
  editDepartment() {}
  deleteDepartment() {}
}
