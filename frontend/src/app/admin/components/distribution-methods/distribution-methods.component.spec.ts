import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionMethodsComponent } from './distribution-methods.component';

describe('DistributionMethodsComponent', () => {
  let component: DistributionMethodsComponent;
  let fixture: ComponentFixture<DistributionMethodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributionMethodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributionMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
