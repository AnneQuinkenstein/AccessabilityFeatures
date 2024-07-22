import { Component, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';


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
    ReactiveFormsModule
  ]
})
export class FormComponent {
  private fb = inject(FormBuilder);
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


  onSubmit(): void {
    alert('Thanks!');
  }
}
