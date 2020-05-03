import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Alimentacio } from 'src/app/core/model/alimentacio.model';
import { TipusAlimentacio } from 'src/app/core/model/tipus-alimentacio.model';

@Component({
  selector: 'app-form-alimentacio',
  templateUrl: './form-alimentacio.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormAlimentacioComponent implements OnInit, OnChanges {

  @Input() alimentacio: Alimentacio;
  @Input() tipusAlimentacions: TipusAlimentacio[];

  public form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.createForm();
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.alimentacio) {
      this.form.patchValue(this.alimentacio);
    }
  }

  createForm(): FormGroup {
    return this.fb.group({
      id: [null],
      import: ['', Validators.required],
      tipusAlimentacioId: ['', Validators.required],
      data: ['', Validators.required],
      concepte: ['']
    });
  }

  public getValue(): Alimentacio {
    return this.form.value;
  }


}
