import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

interface recivedData {
  department: { id: string; name: string; code: string };
  status: boolean;
}
interface department {
  id: string;
  name: string;
  code: string;
}

@Component({
  selector: "app-department-from",
  templateUrl: "./department-from.component.html",
  styleUrls: ["./department-from.component.scss"],
})
export class DepartmentFromComponent implements OnInit {
  department = { id: "", name: "", code: "" };
  editableData: department = { id: "", name: "", code: "" };
  status = this.data.status;

  constructor(
    private matDialogRef: MatDialogRef<DepartmentFromComponent>,
    @Inject(MAT_DIALOG_DATA) private data: recivedData
  ) {}

  ngOnInit() {
    this.editableData = { ...this.data.department };
  }

  closeOnly() {
    this.matDialogRef.close(this.department);
  }
  onCloseDialog() {
    this.matDialogRef.close(this.department);
  }
  onSave() {
    this.matDialogRef.close(this.editableData);
  }
}
