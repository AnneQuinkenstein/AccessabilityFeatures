import { Component } from '@angular/core';
import {MatListModule, MatListItem} from "@angular/material/list";
import { MatCardModule } from '@angular/material/card';



@Component({
  selector: 'tib-home',
  standalone: true,
  imports: [
    MatListItem,
    MatListModule,
    MatCardModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public skipTo: string = 'main-content';

}
