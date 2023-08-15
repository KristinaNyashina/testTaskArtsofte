import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListPageComponent} from "./pages/list-page/list-page.component";
import {DetailPageComponent} from "./pages/detail-page/detail-page.component";
import {YandexMapPageComponent} from "./pages/yandex-map-page/yandex-map-page.component";

const routes: Routes = [

  {
    path: 'list',
    component: ListPageComponent,
  },

  {
    path: 'detail',
    component: DetailPageComponent,
  },
  {
    path: 'map',
    component: YandexMapPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
