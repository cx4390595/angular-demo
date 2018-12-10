import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Transfer01Component } from './transfer01.component';

describe('Transfer01Component', () => {
  let component: Transfer01Component;
  let fixture: ComponentFixture<Transfer01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Transfer01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Transfer01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
