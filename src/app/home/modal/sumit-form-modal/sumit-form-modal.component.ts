import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'tib-sumit-form-modal',
  standalone: true,
  imports: [],
  templateUrl: './sumit-form-modal.component.html',
  styleUrl: './sumit-form-modal.component.css'
})
export class SumitFormModalComponent {
  @Output() formSubmitted = new EventEmitter<void>();
}


