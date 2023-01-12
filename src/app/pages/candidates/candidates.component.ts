import { Component, OnInit } from "@angular/core";
import { HumanResourceService } from "src/app/services/human-resource.service";
import { MatDialog } from "@angular/material/dialog";
import { CandidateFormComponent } from "src/app/componentes/candidate-form/candidate-form.component";

interface candidate {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  Apllied_For: string;
}

@Component({
  selector: "app-candidates",
  templateUrl: "./candidates.component.html",
  styleUrls: ["./candidates.component.scss"],
})
export class CandidatesComponent implements OnInit {
  candidates: object;
  editstatus: boolean = false;
  candidate: candidate = {
    id: "",
    firstName: "",
    lastName: "",
    userName: "",
    Apllied_For: "",
  };
  header = [
    "id",
    "First Name",
    "Last Name",
    "email",
    "Aplication Possition",
    "Actions",
  ];
  constructor(
    private service: HumanResourceService,
    private matDialog: MatDialog
  ) {}

  ngOnInit() {
    this.getCandidates();
  }

  openDialog() {
    let dialigRef = this.matDialog.open(CandidateFormComponent, {
      data: { candidate: this.candidate, status: this.editstatus },
      disableClose: true,
    });
    dialigRef.afterClosed().subscribe((result) => {
      if (
        result.candidate.firstName !== "" &&
        result.candidate.lastName !== "" &&
        result.candidate.userName !== "" &&
        result.candidate.Apllied_For !== ""
      ) {
        if (result.closedBy !== "close button") {
          this.addCandidates(result.candidate);
        }
      }
    });
  }
  onEdit(candidate: candidate) {
    this.editstatus = true;
    let dialogRef = this.matDialog.open(CandidateFormComponent, {
      data: { candidate: candidate, status: this.editstatus },
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.candidate = result.candidate;
      if (
        this.candidate.Apllied_For !== "" &&
        this.candidate.firstName !== "" &&
        this.candidate.lastName !== "" &&
        this.candidate.userName !== ""
      ) {
        this.edditCandidates(this.candidate.id);
        this.editstatus = false;
      }
    });
  }
  getCandidates() {
    this.service.getCandidates().subscribe((result) => {
      this.candidates = result;
    });
  }
  addCandidates(data: object) {
    return this.service.addCandidate(data).subscribe(() => {
      this.getCandidates();
    });
  }
  edditCandidates(id: string) {
    if (
      this.candidate.Apllied_For !== "" &&
      this.candidate.firstName !== "" &&
      this.candidate.lastName !== "" &&
      this.candidate.userName !== ""
    ) {
      return this.service.editCandidate(id, this.candidate).subscribe(() => {
        this.getCandidates();
      });
    }
  }

  deleteCandidates(id: string) {
    let result = confirm("Do you want to delete this Candididate");
    if (result) {
      this.service.deleteCandidate(id).subscribe(() => {
        this, this.getCandidates();
      });
    }
  }
}
