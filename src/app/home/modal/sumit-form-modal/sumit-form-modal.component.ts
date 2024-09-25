import { Component, EventEmitter, Output } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'tib-sumit-form-modal',
  standalone: true,
  imports: [],
  templateUrl: './sumit-form-modal.component.html',
  styleUrl: './sumit-form-modal.component.css'
})
export class SumitFormModalComponent {
  constructor(private router: Router) { }
  @Output() formSubmitted = new EventEmitter<void>();

  closeModal() {
    this.formSubmitted.emit();
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/']);
    });
  }

}


