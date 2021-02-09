import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminupdatecakeComponent } from './adminupdatecake.component';

describe('AdminupdatecakeComponent', () => {
  let component: AdminupdatecakeComponent;
  let fixture: ComponentFixture<AdminupdatecakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminupdatecakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminupdatecakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
