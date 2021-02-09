import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginpopComponent } from './loginpop.component';

describe('LoginpopComponent', () => {
  let component: LoginpopComponent;
  let fixture: ComponentFixture<LoginpopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginpopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginpopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
