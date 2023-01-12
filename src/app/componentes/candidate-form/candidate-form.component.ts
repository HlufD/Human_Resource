import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
interface recivesData {
  candidate: candidate;
  status: boolean;
}

interface candidate {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  Apllied_For: string;
}

@Component({
  selector: "app-candidate-form",
  templateUrl: "./candidate-form.component.html",
  styleUrls: ["./candidate-form.component.scss"],
})
export class CandidateFormComponent implements OnInit {
  candidate: candidate = {
    id: "",
    firstName: "",
    lastName: "",
    userName: "",
    Apllied_For: "",
  };
  editableData: candidate;
  status = this.data.status;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: recivesData,
    private matDialgRef: MatDialogRef<CandidateFormComponent>
  ) {}

  ngOnInit() {
    this.editableData = { ...this.data.candidate };
  }
  onClose() {
    this.matDialgRef.close({
      candidate: this.candidate,
      closedBy: "close button",
    });
  }
  onCloseDialog() {
    this.matDialgRef.close({
      candidate: this.candidate,
      closedBy: "save button",
    });
  }
  onSave() {
    this.matDialgRef.close({
      candidate: this.editableData,
      closedBy: "save button",
    });
  }
}
