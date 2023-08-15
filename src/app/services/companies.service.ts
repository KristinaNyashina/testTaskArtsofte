import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {ICompany} from "../models/company";
import {CompaniesData} from "../data/companies";
import {sortValue} from "../data/sort-value";


@Injectable()
export class CompaniesService {

   public get getCompanyList(): Observable<ICompany[]> {
     return this.subject.asObservable();
   }

  public companies!: ICompany[];
  public subject: BehaviorSubject<ICompany[]> = new BehaviorSubject<ICompany[]>([]);
  public sortList!: ICompany[];
  private companiesType: Set<string> = new Set<string>();
  public companiesIndustry: Set<string> = new Set<string>();

  private _sortType: sortValue = '';

  constructor(
    private companiesData: CompaniesData
  ) {
    this.companiesData.getAll().subscribe((company: ICompany[]) => this.initialize(company))
  }

  private initialize(allCompanies: ICompany[]): void{
    this.companies = allCompanies;
    this.sortList = allCompanies;
    this.subject.next(allCompanies);
    this.companiesIndustriesList();
    this.companiesTypeList();

  }

  public getCompanyById(id: number): ICompany {
    const company = this.companies.find((company: ICompany) => company.id === id);

    console.log(company)
    if (!company) {
      throw new Error();
    }
    return company;
  }

  public sortCompanies(value: sortValue){
    console.log(this.sortList)
    if(value !== ''){
      this.sortList = this.sortList.sort((prev, next) => {
        if ( prev[value] < next[value] ) {
          return -1;
        } else if ( prev[value] > next[value] ) {
          return 1;
        } else {
          return 0;
        }
      })
    }
    this.subject.next(this.sortList);
  }

  public get getType(): Set<string>{
    return this.companiesType;
  }

  public get getIndustries() : Set<string>{
    return this.companiesIndustry;
  }

  public filterListCompanies(name?: string, type?: string, industry?: string){
    this.sortList = [];
    for (let company of this.companies) {

      if (this.checkIndustry(company,industry) &&
        this.checkName(company,name) &&
        this.checkType(company,type)){
        this.sortList.push(company);
      }
    }

    this.sortCompanies(this._sortType);
  }

  private checkIndustry(company:ICompany, industry?: string ): boolean {
    if(!industry){
      return true;
    }
    return company.industry === industry;
  }
  private checkType(company:ICompany, type?: string ): boolean {
    if(!type){
      return true;
    }
    return company.type == type;
  }
  private checkName(company:ICompany, name?: string ): boolean {
    if(!name){
      return true;
    }
    return company.business_name.toLowerCase().includes(name);
  }



  private companiesIndustriesList() : void
  {
    for (let company of this.companies){
      this.companiesType.add(company.type)
    }
  }

  private companiesTypeList() : void{
    for (let company of this.companies){
      this.companiesIndustry.add(company.industry)
    }
  }
}
