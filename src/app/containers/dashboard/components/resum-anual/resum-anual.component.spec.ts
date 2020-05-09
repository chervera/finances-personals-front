import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumAnualComponent } from './resum-anual.component';

describe('ResumAnualComponent', () => {
  let component: ResumAnualComponent;
  let fixture: ComponentFixture<ResumAnualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumAnualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumAnualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
