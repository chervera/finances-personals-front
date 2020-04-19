import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges } from '@angular/core';
import { DespesaFixa } from 'src/app/core/model/despesa-fixa.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-despesa-fixa',
  templateUrl: './form-despesa-fixa.component.html',
  styleUrls: ['./form-despesa-fixa.component.scss'],

})
export class FormDespesaFixaComponent implements OnInit, OnChanges {

  @Input() despesaFixa: DespesaFixa;

  public form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.createForm();
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.form.patchValue(this.despesaFixa);
  }

  createForm(): FormGroup {
    return this.fb.group({
      descripcio: ['', Validators.required],
      import: ['', Validators.required],
      mesInici: [''],
      mesFi: [''],
    });
  }


}
