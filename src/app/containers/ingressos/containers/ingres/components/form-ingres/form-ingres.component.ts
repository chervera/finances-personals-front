import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Ingres } from 'src/app/core/model/ingres.model';

@Component({
  selector: 'app-form-ingres',
  templateUrl: './form-ingres.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormIngresComponent implements OnInit, OnChanges {

  @Input() ingres: Ingres;

  public form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.createForm();
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.ingres) {
      this.form.patchValue(this.ingres);
    }
  }

  createForm(): FormGroup {
    return this.fb.group({
      id: [null],
      concepte: [''],
      import: ['', Validators.required],
      data: ['', Validators.required],
    });
  }

  public getValue(): Ingres {
    return this.form.value;
  }


}
