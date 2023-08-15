import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ICompany} from "../../models/company";
import {CompaniesService} from "../../services/companies.service";


@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit {

  public companyId!: number;
  public company!: ICompany;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _companiesService: CompaniesService
  ) {
  }

  public ngOnInit(): void {
    this.companyId = Number(this._activatedRoute.snapshot.queryParams['id']);
    this.company = this._companiesService.getCompanyById(this.companyId);
  }
}
