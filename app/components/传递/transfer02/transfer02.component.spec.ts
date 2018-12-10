import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Transfer02Component } from './transfer02.component';

describe('Transfer02Component', () => {
  let component: Transfer02Component;
  let fixture: ComponentFixture<Transfer02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Transfer02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Transfer02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
