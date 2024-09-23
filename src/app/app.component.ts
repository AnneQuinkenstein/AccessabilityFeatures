import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './home/form/form.component';
import { NavComponent } from './nav/nav.component';
import { TablePubPerYearComponent } from './home/table/table-pub-per-year/table-pub-per-year.component';
import { TablePublishedInCityComponent } from './home/table/table-published-in-city/table-published-in-city.component';

@Component({
  selector: 'tib-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TablePubPerYearComponent,
    TablePublishedInCityComponent,
    FormComponent,
    NavComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Uni_Barrierefrei';
}
