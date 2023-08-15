import {Observable} from "rxjs";
import {ICompany} from "../models/company";
import {HttpClient} from "@angular/common/http";

export class ProductsData {

  constructor(
    private http: HttpClient,
  ) {
  }

  getAll(): Observable<ICompany[]> {
    return this.http.get<ICompany[]>('https://random-data-api.com/api/company/random_company?size=100');
  }
}



