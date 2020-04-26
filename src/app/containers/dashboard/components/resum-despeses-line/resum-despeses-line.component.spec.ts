import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumDespesesLineComponent } from './resum-despeses-line.component';

describe('ResumDespesesLineComponent', () => {
  let component: ResumDespesesLineComponent;
  let fixture: ComponentFixture<ResumDespesesLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumDespesesLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumDespesesLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
