import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesaFixaContainer } from './despesa-fixa.container';

describe('DespesaFixaContainer', () => {
  let component: DespesaFixaContainer;
  let fixture: ComponentFixture<DespesaFixaContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DespesaFixaContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DespesaFixaContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
