import {Component, OnInit} from '@angular/core';
import {ICompany} from "../../models/company";
import {CompaniesService} from "../../services/companies.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent{

  public get getCompanyList(): Observable<ICompany[]> {
    return this.companiesService.getCompanyList;
  }

  constructor(
    private companiesService: CompaniesService,
  ) {
  }
}
