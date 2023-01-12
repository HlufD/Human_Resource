import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

interface reciveData {
  company: company;
  status: boolean;
}
interface company {
  id: string;
  name: string;
  No_of_Employee: string;
}

@Component({
  selector: "app-compnay-form",
  templateUrl: "./compnay-form.component.html",
  styleUrls: ["./compnay-form.component.scss"],
})
export class CompnayFormComponent implements OnInit {
  company: company = { id: "", name: "", No_of_Employee: "" };
  editableData: company;
  status = this.data.status;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: reciveData,
    private matDialogref: MatDialogRef<CompnayFormComponent>
  ) {}

  ngOnInit() {
    this.editableData = { ...this.data.company };
  }
  onClose() {
    this.matDialogref.close({
      company: this.company,
      closedBy: "close button",
    });
  }
  onCloseDialog() {
    this.matDialogref.close({
      company: this.company,
      closedBy: "save button",
    });
  }

  onSave() {
    this.matDialogref.close({
      company: this.editableData,
      closedBy: "save button",
    });
  }
}
