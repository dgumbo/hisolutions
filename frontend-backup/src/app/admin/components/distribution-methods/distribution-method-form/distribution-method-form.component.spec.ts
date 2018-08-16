import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionMethodFormComponent } from './distribution-method-form.component';

describe('DistributionMethodFormComponent', () => {
  let component: DistributionMethodFormComponent;
  let fixture: ComponentFixture<DistributionMethodFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributionMethodFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributionMethodFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
