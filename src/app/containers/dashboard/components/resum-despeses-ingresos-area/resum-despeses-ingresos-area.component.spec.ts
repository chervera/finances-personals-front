import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumDespesesIngresosAreaComponent } from './resum-despeses-ingresos-area.component';

describe('ResumDespesesIngresosAreaComponent', () => {
  let component: ResumDespesesIngresosAreaComponent;
  let fixture: ComponentFixture<ResumDespesesIngresosAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumDespesesIngresosAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumDespesesIngresosAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
