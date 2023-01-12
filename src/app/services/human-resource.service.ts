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
  getDepartment(id: string) {
    return this.http.get(`${this.departmenturl}/${id}`);
  }
  addDepartment(data: object) {
    return this.http.post(this.departmenturl, data);
  }
  editDepartMnet(id: string, newValue: object) {
    return this.http.patch(`${this.departmenturl}/${id}`, newValue);
  }
  delteDepartment(id: string) {
    return this.http.delete(`${this.departmenturl}/${id}`);
  }

  /*---------------------------end of  Department service------------------------------------------ */

  /*---------------------------start of Slary service------------------------------------------ */
  getSlaries() {
    return this.http.get(this.slaryurl);
  }
  getSarly(id: string) {
    return this.http.get(`${this.slaryurl}/${id}`);
  }

  addSlary(data: object) {
    return this.http.post(this.slaryurl, data);
  }
  editSalary(id: string, newValue: object) {
    return this.http.patch(`${this.slaryurl}/${id}`, newValue);
  }
  deleteSalary(id: string) {
    return this.http.delete(`${this.slaryurl}/${id}`);
  }
  /*---------------------------end of Slary service------------------------------------------ */

  /*---------------------------start of Company service------------------------------------------ */
  getCompany() {
    return this.http.get(this.companyurl);
  }
  getCompanyById(id: string) {
    return this.http.get(`${this.companyurl}/${id}`);
  }

  addComapny(data: object) {
    return this.http.post(this.companyurl, data);
  }

  editCompany(id: string, newValue: object) {
    return this.http.patch(`${this.companyurl}/${id}`, newValue);
  }
  deleteCompany(id: string) {
    return this.http.delete(`${this.companyurl}/${id}`);
  }
  /*---------------------------end of Company service------------------------------------------ */

  /*---------------------------start of Candidates service------------------------------------------ */
  getCandidates() {
    return this.http.get(this.candidatesurl);
  }
  getCandidate(id: string) {
    return this.http.get(`${this.candidatesurl}/${id}`);
  }
  addCandidate(data: object) {
    return this.http.post(this.candidatesurl, data);
  }

  editCandidate(id: string, newValue: object) {
    return this.http.patch(`${this.candidatesurl}/${id}`, newValue);
  }
  deleteCandidate(id: string) {
    return this.http.delete(`${this.candidatesurl}/${id}`);
  }
  /*---------------------------end of Candidates service------------------------------------------ */
}
