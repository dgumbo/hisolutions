import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudianceFormComponent } from './audiance-form.component';

describe('AudianceFormComponent', () => {
  let component: AudianceFormComponent;
  let fixture: ComponentFixture<AudianceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudianceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudianceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
