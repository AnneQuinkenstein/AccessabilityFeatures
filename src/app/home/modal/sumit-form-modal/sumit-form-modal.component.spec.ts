import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumitFormModalComponent } from './sumit-form-modal.component';

describe('SumitFormModalComponent', () => {
  let component: SumitFormModalComponent;
  let fixture: ComponentFixture<SumitFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SumitFormModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SumitFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
