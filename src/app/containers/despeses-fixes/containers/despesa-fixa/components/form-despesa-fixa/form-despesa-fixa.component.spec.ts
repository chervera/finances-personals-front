import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDespesaFixaComponent } from './form-despesa-fixa.component';

describe('FormDespesaFixaComponent', () => {
  let component: FormDespesaFixaComponent;
  let fixture: ComponentFixture<FormDespesaFixaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDespesaFixaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDespesaFixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
