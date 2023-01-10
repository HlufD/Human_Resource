import { Component, OnInit } from "@angular/core";
import { HumanResourceService } from "src/app/services/human-resource.service";

@Component({
  selector: "app-candidates",
  templateUrl: "./candidates.component.html",
  styleUrls: ["./candidates.component.scss"],
})
export class CandidatesComponent implements OnInit {
  candidates: object;
  header = [
    "id",
    "First Name",
    "Last Name",
    "email",
    "Aplication Possition",
    "Actions",
  ];
  constructor(private service: HumanResourceService) {}

  ngOnInit() {
    this.getCandidates();
  }

  getCandidates() {
    this.service.getCandidates().subscribe((result) => {
      this.candidates = result;
    });
  }
  addCandidates() {}
  edditCandidates() {}
  deleteCandidates() {}
}
