import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserhomesinglecakeComponent } from './userhomesinglecake.component';

describe('UserhomesinglecakeComponent', () => {
  let component: UserhomesinglecakeComponent;
  let fixture: ComponentFixture<UserhomesinglecakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserhomesinglecakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserhomesinglecakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
