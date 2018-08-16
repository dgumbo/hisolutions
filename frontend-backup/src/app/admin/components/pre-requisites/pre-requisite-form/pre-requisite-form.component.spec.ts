import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreRequisiteFormComponent } from './pre-requisite-form.component';

describe('PreRequisiteFormComponent', () => {
  let component: PreRequisiteFormComponent;
  let fixture: ComponentFixture<PreRequisiteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreRequisiteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreRequisiteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
