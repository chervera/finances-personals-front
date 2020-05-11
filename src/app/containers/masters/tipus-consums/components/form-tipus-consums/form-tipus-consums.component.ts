import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TipusAlimentacio } from 'src/app/core/model/tipus-alimentacio.model';
import { TipusConsum } from 'src/app/core/model/tipus-consum.model';

@Component({
  selector: 'app-form-tipus-consums',
  templateUrl: './form-tipus-consums.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormTipusConsumsComponent implements OnInit, OnChanges {

  @Input() tipusConsum: TipusAlimentacio;
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
    if (this.tipusConsum) {
      this.form.patchValue(this.tipusConsum);
    }
  }

  createForm(): FormGroup {
    return this.fb.group({
      id: [null],
      descripcio: [''],
    });
  }

  public getValue(): TipusConsum {
    return this.form.value;
  }

  public resetValue() {
    this.form.reset();
  }

  onSave() {
    this.save.emit(null);
  }

}
