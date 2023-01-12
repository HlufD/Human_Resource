import { Component, OnInit } from "@angular/core";
import { HumanResourceService } from "src/app/services/human-resource.service";
import { MatDialog } from "@angular/material/dialog";
import { DepartmentFromComponent } from "../../componentes/department-from/department-from.component";
interface department {
  id: string;
  code: string;
  name: string;
}
@Component({
  selector: "app-department",
  templateUrl: "./department.component.html",
  styleUrls: ["./department.component.scss"],
})
export class DepartmentComponent implements OnInit {
  departments: object;
  department: department = { id: "", name: "", code: "" };
  editstatus: boolean = false;

  header = ["id", "Name", "Department Code", "Actions"];
  constructor(
    private service: HumanResourceService,
    private matDialog: MatDialog
  ) {}

  ngOnInit() {
    this.getdepartments();
  }
  openDialog() {
    let dialoRref = this.matDialog.open(DepartmentFromComponent, {
      data: { status: false },
      disableClose: true,
    });
    dialoRref.afterClosed().subscribe((result: any) => {
      this.department = result;
      if (this.department.code !== "" && this.department.name !== "") {
        this.addDepartment();
      }
    });
  }

  onEdit(department: department) {
    this.editstatus = true;
    let refDialog = this.matDialog.open(DepartmentFromComponent, {
      data: { department, status: this.editstatus },
    });
    refDialog.afterClosed().subscribe((result) => {
      this.department = result;
      if (this.department.code !== "" && this.department.name !== "") {
        this.editDepartment(this.department.id);
        this.editstatus = false;
      }
    });
  }

  getdepartments() {
    return this.service.getDepartments().subscribe((result: any) => {
      this.departments = result;
    });
  }

  addDepartment() {
    this.service.addDepartment(this.department).subscribe((result) => {
      this.department = { id: "", name: "", code: "" };
      this.getdepartments();
    });
  }
  editDepartment(id: string) {
    if (this.department.name !== "" && this.department.code !== "") {
      return this.service
        .editDepartMnet(id, this.department)
        .subscribe((result) => {
          this.getdepartments();
        });
    }
  }

  deleteDepartment(id: string) {
    let result = confirm("Do you want to delete this Department");
    if (result)
      this.service.delteDepartment(id).subscribe((result) => {
        this.getdepartments();
      });
  }
}
