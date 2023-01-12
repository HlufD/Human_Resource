import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

interface recivedData {
  salary: salary;
  status: boolean;
}

interface salary {
  id: string;
  employeType: string;
  salary: string;
}

@Component({
  selector: "app-salary-form",
  templateUrl: "./salary-form.component.html",
  styleUrls: ["./salary-form.component.scss"],
})
export class SalaryFormComponent implements OnInit {
  salary: salary = { id: "", employeType: "", salary: "" };
  status = this.data.status;
  eiditableSalary: salary;
  constructor(
    private matDialogRef: MatDialogRef<SalaryFormComponent>,
    @Inject(MAT_DIALOG_DATA) private data: recivedData
  ) {}

  ngOnInit() {
    this.eiditableSalary = { ...this.data.salary };
  }
  ocCloseonly() {
    return this.matDialogRef.close({
      salary: this.salary,
      closedBy: "close button",
    });
  }
  onCloseDialog() {
    return this.matDialogRef.close({
      salary: this.salary,
      closedBy: "save button",
    });
  }
  onSave() {
    return this.matDialogRef.close({
      salary: this.eiditableSalary,
      closedBy: "save button",
    });
  }
}
