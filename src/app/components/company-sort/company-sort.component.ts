import { Component } from '@angular/core';
import {sortValue} from "../../data/sort-value";
import {CompaniesService} from "../../services/companies.service";

@Component({
  selector: 'app-company-sort',
  templateUrl: './company-sort.component.html',
  styleUrls: ['./company-sort.component.scss']
})

export class CompanySortComponent {
  activeValue: string = '';
  activeClassName: string = '';

  constructor(
    private companiesService: CompaniesService
  ) {
  }



  sortCompanies(value: sortValue) {
    this.companiesService.sortCompanies(value);
    this.activeValue = value;
    this.activeClassName = this.activeValue + 'PageClass';
  }
}
