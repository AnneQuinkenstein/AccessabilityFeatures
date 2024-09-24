import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import { FormComponent } from './home/form/form.component';
import { NavComponent } from './nav/nav.component';
import { TablePubPerYearComponent } from './home/table/table-pub-per-year/table-pub-per-year.component';
import { TablePublishedInCityComponent } from './home/table/table-published-in-city/table-published-in-city.component';
import {HomeComponent} from "./home/home/home.component";
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'tib-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TablePubPerYearComponent,
    TablePublishedInCityComponent,
    FormComponent,
    NavComponent,
    HomeComponent,
    RouterLink,
    MatDivider
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public skipTo: string = 'main-content';
  title = 'Uni_Barrierefrei';
}
