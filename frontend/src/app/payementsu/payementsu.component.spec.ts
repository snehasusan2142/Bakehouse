import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayementsuComponent } from './payementsu.component';

describe('PayementsuComponent', () => {
  let component: PayementsuComponent;
  let fixture: ComponentFixture<PayementsuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayementsuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayementsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
