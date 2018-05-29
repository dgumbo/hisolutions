import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudianceViewComponent } from './audiance-view.component';

describe('AudianceViewComponent', () => {
  let component: AudianceViewComponent;
  let fixture: ComponentFixture<AudianceViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudianceViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudianceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
