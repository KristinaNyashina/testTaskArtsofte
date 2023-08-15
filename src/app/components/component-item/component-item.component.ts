import {Component, Input} from '@angular/core';
import {ICompany} from "../../models/company";
import {Router} from "@angular/router";


@Component({
  selector: 'app-component-item',
  templateUrl: './component-item.component.html',
  styleUrls: ['./component-item.component.scss']
})
export class ComponentItemComponent {
  @Input()
  company!: ICompany;

  constructor(
    private _router: Router
  ) {
  }

  public redirectToDetail(id: number): void {
    this._router.navigate(['detail'], {
      queryParams: {
        id: id
      }
    })
  }
}
