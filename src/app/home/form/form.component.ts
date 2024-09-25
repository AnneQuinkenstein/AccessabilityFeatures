import { Component, inject, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ListKeyManager } from '@angular/cdk/a11y';
import { MatListItem } from '@angular/material/list';
import {SumitModalComponent} from "../modal/sumit-modal/sumit-modal.component";
import {AutoFocusDirective} from "../../auto-focus.directive";
import {Router} from "@angular/router";


@Component({
  selector: 'tib-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    SumitModalComponent,
    AutoFocusDirective,
  ]
})
export class FormComponent {
  private fb = inject(FormBuilder);
  constructor(private router: Router) { }
  addressForm = this.fb.group({
    ppnNo:  [null, Validators.required],
    title:  [null, Validators.required],
    author:  [null, Validators.required],
    yearofPublication: [null, Validators.compose([
      Validators.required, Validators.minLength(4), Validators.maxLength(4)])
    ],
    place: [null, Validators.required],
  });

  hasUnitNumber = false;
 /* protected submitModalOpen = false;*/
  onSubmit(): void {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/form']);
    });
  }
}
