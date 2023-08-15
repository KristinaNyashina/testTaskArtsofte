import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {CompaniesService} from "../../services/companies.service";

@Component({
  selector: 'app-company-filter',
  templateUrl: './company-filter.component.html',
  styleUrls: ['./company-filter.component.scss']
})
export class CompanyFilterComponent {
  filter: FormGroup;

  public get getListIndustry(): Set<string> {
    return this.companiesService.getIndustries
  }

  public get getListType(): Set<string> {
    return this.companiesService.getType
  }


  constructor(
    private companiesService: CompaniesService,
    private formBuilder: FormBuilder
  ) {
    this.filter = formBuilder.group({
      name: new FormControl(null),
      type: new FormControl(null),
      industry: new FormControl(null),
    });
  }

  public filterCompanyList(): void {
    const name: string = this.filter.get('name')?.value;
    const type: string = this.filter.get('type')?.value;
    const industry: string = this.filter.get('industry')?.value;
    this.companiesService.filterListCompanies(name, type, industry);
  }
}
