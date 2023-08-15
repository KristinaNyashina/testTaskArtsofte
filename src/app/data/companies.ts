import {Observable} from "rxjs";
import {ICompany} from "../models/company";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class CompaniesData {
  constructor(
    private http: HttpClient,
  ) {
  }

  public getAll(): Observable<ICompany[]> {
    return this.http.get<ICompany[]>('https://random-data-api.com/api/company/random_company?size=100');
  }
}



