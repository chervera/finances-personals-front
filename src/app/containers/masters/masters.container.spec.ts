import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MastersContainer } from './masters.container';

describe('MastersContainer', () => {
  let component: MastersContainer;
  let fixture: ComponentFixture<MastersContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastersContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MastersContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
