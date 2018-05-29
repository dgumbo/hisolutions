import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionMethodViewComponent } from './distribution-method-view.component';

describe('DistributionMethodViewComponent', () => {
  let component: DistributionMethodViewComponent;
  let fixture: ComponentFixture<DistributionMethodViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributionMethodViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributionMethodViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
