import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HumanResourceService {
  employeurl = "http://localhost:3006/memeber";
  departmenturl = "http://localhost:3006/departments";
  slaryurl = "http://localhost:3006/salary";
  companyurl = "http://localhost:3006/company";
  candidatesurl = "http://localhost:3006/candidate";

  constructor(private http: HttpClient) {}

  /*----------------------------- start of Employee service---------------------------------------- */
  getMamebers() {
    return this.http.get(this.employeurl);
  }
  getMember(id: string) {
    return this.http.get(`${this.employeurl}/${id}`);
  }
  addMember(data: object) {
    return this.http.post(this.employeurl, data);
  }

  deleteMember(id: string) {
    return this.http.delete(`${this.employeurl}/${id}`);
  }
  editMember(id: string, newValue: object) {
    return this.http.patch(`${this.employeurl}/${id}`, newValue);
  }
  /*---------------------------end of Employee service------------------------------------------ */

  /*---------------------------start of Department service------------------------------------------ */

  getDepartments() {
    return this.http.get(this.departmenturl);
  }
  /*---------------------------end of  Department service------------------------------------------ */

  /*---------------------------start of Slary service------------------------------------------ */
  getSlary() {
    return this.http.get(this.slaryurl);
  }
  /*---------------------------end of Slary service------------------------------------------ */

  /*---------------------------start of Company service------------------------------------------ */
  getCompany() {
    return this.http.get(this.companyurl);
  }
  /*---------------------------end of Company service------------------------------------------ */

  /*---------------------------start of Candidates service------------------------------------------ */
  getCandidates() {
    return this.http.get(this.candidatesurl);
  }
  /*---------------------------end of Candidates service------------------------------------------ */
}
