import { Routes } from '@angular/router';
import {FormComponent} from "./home/form/form.component";
import {TablePublishedInCityComponent} from "./home/table/table-published-in-city/table-published-in-city.component";
import {TablePubPerYearComponent} from "./home/table/table-pub-per-year/table-pub-per-year.component";

export const routes: Routes = [

  {path: 'pubYear', title: "jährliche Publikationen", component: TablePubPerYearComponent},
  {path: 'pubBl', title: "Berliner Publikationen", component: TablePublishedInCityComponent},
  {path: 'form', title: "Erstelle neue Publikation", component: FormComponent},

];
