import { Component, OnInit } from "@angular/core";
import { HumanResourceService } from "src/app/services/human-resource.service";
import { FormComponent } from "../form/form.component";
import { MatDialog } from "@angular/material/dialog";
@Component({
  selector: "app-members",
  templateUrl: "./members.component.html",
  styleUrls: ["./members.component.scss"],
})
export class MembersComponent implements OnInit {
  constructor(
    private service: HumanResourceService,
    private matDialog: MatDialog
  ) {}
  editstatus: boolean = false;
  mesmbers: object;

  member = {
    id: "",
    firstName: "",
    lastName: "",
    userName: "",
    role: "",
    password: "",
  };

  header = ["id", "First Name", "last Name", "Email", "Department", "Actions"];
  ngOnInit() {
    this.getMembers();
  }

  openDialog() {
    let dialogRef = this.matDialog.open(FormComponent, {
      data: { status: false },
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.member = result;
      if (
        this.member.firstName !== "" &&
        this.member.lastName !== "" &&
        this.member.userName !== "" &&
        this.member.role !== ""
      ) {
        this.addMember();
      }
    });
  }
  onEdit(member: object) {
    this.editstatus = true;
    let dialogRef = this.matDialog.open(FormComponent, {
      disableClose: true,
      data: { ...member, status: this.editstatus },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.member = result;
      if (
        this.member.firstName !== "" &&
        this.member.lastName !== "" &&
        this.member.userName !== "" &&
        this.member.role !== ""
      ) {
        this.edditMember(this.member.id);
      }
    });
  }

  getMembers() {
    return this.service.getMamebers().subscribe((data: any) => {
      this.mesmbers = data;
    });
  }
  addMember() {
    this.service.addMember(this.member).subscribe((res: any) => {
      this.member = {
        id: "",
        firstName: "",
        lastName: "",
        userName: "",
        role: "",
        password: "",
      };
      this.getMembers();
    });
  }
  deleteMember(id: string) {
    let result = confirm("Dp you want to Delete this Employee");
    if (result)
      this.service.deleteMember(id).subscribe((res: any) => {
        this.getMembers();
      });
  }

  edditMember(id: string) {
    this.service.getMember(id).subscribe((member: any) => {
      this.member = member;
    });

    this.service.editMember(id, this.member).subscribe((res) => {
      this.getMembers();
    });
  }
}
