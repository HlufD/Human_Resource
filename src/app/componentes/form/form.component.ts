import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

interface comminData {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  role: string;
  status?: boolean;
}

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent implements OnInit {
  member = {
    id: "",
    firstName: "",
    lastName: "",
    userName: "",
    role: "",
    password: "",
  };
  editData = this.data;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: comminData,
    private matDialogRef: MatDialogRef<FormComponent>
  ) {}

  ngOnInit() {}
  closeOnly() {
    this.matDialogRef.close(this.member);
  }
  onCloseDialog() {
    this.matDialogRef.close(this.member);
  }
  onSaveChanges() {
    this.matDialogRef.close(this.editData);
  }
}
