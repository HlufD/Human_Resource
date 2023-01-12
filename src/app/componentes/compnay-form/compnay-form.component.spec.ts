import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompnayFormComponent } from './compnay-form.component';

describe('CompnayFormComponent', () => {
  let component: CompnayFormComponent;
  let fixture: ComponentFixture<CompnayFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompnayFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompnayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
