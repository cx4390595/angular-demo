import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Study01Component } from './study01.component';

describe('NewComponent', () => {
  let component: Study01Component;
  let fixture: ComponentFixture<Study01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Study01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Study01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
