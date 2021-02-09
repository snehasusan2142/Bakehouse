import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincheckstockComponent } from './admincheckstock.component';

describe('AdmincheckstockComponent', () => {
  let component: AdmincheckstockComponent;
  let fixture: ComponentFixture<AdmincheckstockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincheckstockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincheckstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
