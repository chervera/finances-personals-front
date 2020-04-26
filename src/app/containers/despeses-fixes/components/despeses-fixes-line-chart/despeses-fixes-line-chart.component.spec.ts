import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesesFixesLineChartComponent } from './despeses-fixes-line-chart.component';

describe('DespesesFixesLineChartComponent', () => {
  let component: DespesesFixesLineChartComponent;
  let fixture: ComponentFixture<DespesesFixesLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DespesesFixesLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DespesesFixesLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
