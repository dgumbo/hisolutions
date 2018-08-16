import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiancesComponent } from './audiances.component';

describe('AudiancesComponent', () => {
  let component: AudiancesComponent;
  let fixture: ComponentFixture<AudiancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudiancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudiancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
