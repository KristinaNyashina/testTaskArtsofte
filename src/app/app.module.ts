import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { LayoutComponentComponent } from './components/layout-component/layout-component.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { ComponentItemComponent } from './components/component-item/component-item.component';
import { HttpClientModule } from "@angular/common/http";
import { CompanyYandexMapComponent } from './components/company-yandex-map/company-yandex-map.component';
import { YandexMapPageComponent } from './pages/yandex-map-page/yandex-map-page.component';
import { CompanyFilterComponent } from './components/company-filter/company-filter.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CompanySortComponent } from './components/company-sort/company-sort.component';
import {CompaniesService} from "./services/companies.service";
import {CompaniesData} from "./data/companies";

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyDetailComponent,
    LayoutComponentComponent,
    ListPageComponent,
    DetailPageComponent,
    ComponentItemComponent,
    CompanyYandexMapComponent,
    YandexMapPageComponent,
    CompanyFilterComponent,
    CompanySortComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    CompaniesService,
    CompaniesData
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
