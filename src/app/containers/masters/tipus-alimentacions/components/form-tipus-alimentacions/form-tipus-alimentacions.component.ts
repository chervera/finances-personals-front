import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Ingres } from 'src/app/core/model/ingres.model';
import { TipusAlimentacio } from 'src/app/core/model/tipus-alimentacio.model';


@Component({
  selector: 'app-form-tipus-alimentacions',
  templateUrl: './form-tipus-alimentacions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormTipusAlimentacionsComponent implements OnInit, OnChanges {

  @Input() tipusAlimentacio: TipusAlimentacio;
  @Output() save = new EventEmitter();

  public form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.createForm();
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.tipusAlimentacio) {
      this.form.patchValue(this.tipusAlimentacio);
    }
  }

  createForm(): FormGroup {
    return this.fb.group({
      id: [null],
      descripcio: [''],
    });
  }

  public getValue(): Ingres {
    return this.form.value;
  }

  public resetValue() {
    this.form.reset();
  }

  onSave() {
    this.save.emit(null);
  }

}
