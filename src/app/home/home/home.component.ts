import { Component } from '@angular/core';
import {MatListModule, MatListItem} from "@angular/material/list";
import { MatCardModule } from '@angular/material/card';
import {MatButton} from "@angular/material/button";
import {SumitModalComponent} from "../modal/sumit-modal/sumit-modal.component";



@Component({
  selector: 'tib-home',
  standalone: true,
  imports: [
    MatListItem,
    MatListModule,
    MatCardModule,
    MatButton,
    SumitModalComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public skipTo: string = 'main-content';
  protected submitModalOpen = false;
}
