import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesesFixesComponent } from './despeses-fixes.component';

describe('DespesesFixesComponent', () => {
  let component: DespesesFixesComponent;
  let fixture: ComponentFixture<DespesesFixesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DespesesFixesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DespesesFixesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
