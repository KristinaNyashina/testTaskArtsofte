import { Component } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: 'app-layout-component',
  templateUrl: './layout-component.component.html',
  styleUrls: ['./layout-component.component.scss']
})
export class LayoutComponentComponent {

  activePath: string = '';
  activeClassName: string = '';
  constructor(
    private _router: Router,
  ) {
    this._router.events.subscribe((event): void => {
      if (event instanceof NavigationEnd) {
        this.activePath = event.url.split('/')[1] || 'default';
        this.activeClassName = this.activePath + 'PageClass';
      }
    });
  }

  public redirectToYandexMap(): void {
    this._router.navigate(['map']);
  }

  public redirectToCompaniesList(): void {
    this._router.navigate(['list']);
  }
}
