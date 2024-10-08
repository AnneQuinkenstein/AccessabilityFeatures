import { A11yModule } from '@angular/cdk/a11y';
import { Component, EventEmitter, Output } from '@angular/core';
import {SumitFormModalComponent} from "../sumit-form-modal/sumit-form-modal.component";
import {Router} from "@angular/router";


@Component({
  selector: 'tib-sumit-modal',
  standalone: true,
  templateUrl: './sumit-modal.component.html',
  styleUrl: './sumit-modal.component.css',
  imports: [SumitFormModalComponent, A11yModule]
})
export class SumitModalComponent {
  @Output() modalClose = new EventEmitter<void>();
  constructor(private router: Router) { }

  closeModal() {
    this.modalClose.emit();
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/']);
    });
  }
}
