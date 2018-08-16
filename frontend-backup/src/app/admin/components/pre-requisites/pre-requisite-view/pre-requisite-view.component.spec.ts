import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreRequisiteViewComponent } from './pre-requisite-view.component';

describe('PreRequisiteViewComponent', () => {
  let component: PreRequisiteViewComponent;
  let fixture: ComponentFixture<PreRequisiteViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreRequisiteViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreRequisiteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
