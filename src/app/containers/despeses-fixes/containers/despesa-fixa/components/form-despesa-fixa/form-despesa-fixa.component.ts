import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges } from '@angular/core';
import { DespesaFixa } from 'src/app/core/model/despesa-fixa.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-despesa-fixa',
  templateUrl: './form-despesa-fixa.component.html',
  styleUrls: ['./form-despesa-fixa.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
    if (this.despesaFixa) {
      this.form.patchValue(this.despesaFixa);
    }
  }

  createForm(): FormGroup {
    return this.fb.group({
      id: [null],
      descripcio: ['', Validators.required],
      import: ['', Validators.required],
      mesInici: [''],
      mesFi: [''],
    });
  }

  public getValue(): DespesaFixa {
    return this.form.value;
  }


}
