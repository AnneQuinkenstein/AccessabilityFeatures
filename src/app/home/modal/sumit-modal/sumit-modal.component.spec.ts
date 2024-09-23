import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumitModalComponent } from './sumit-modal.component';

describe('SumitModalComponent', () => {
  let component: SumitModalComponent;
  let fixture: ComponentFixture<SumitModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SumitModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SumitModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
