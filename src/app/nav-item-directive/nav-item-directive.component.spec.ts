import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavItemDirectiveComponent } from './nav-item-directive.component';

describe('NavItemDirectiveComponent', () => {
  let component: NavItemDirectiveComponent;
  let fixture: ComponentFixture<NavItemDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavItemDirectiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavItemDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
