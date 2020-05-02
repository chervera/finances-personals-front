import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Consum } from 'src/app/core/model/consum.model';
import { TipusConsum } from 'src/app/core/model/tipus-consum.model';

@Component({
  selector: 'app-form-consum',
  templateUrl: './form-consum.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormConsumComponent implements OnInit, OnChanges {

  @Input() consum: Consum;
  @Input() tipusConsums: TipusConsum[];

  public form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.createForm();
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.consum) {
      this.form.patchValue(this.consum);
    }
  }

  createForm(): FormGroup {
    return this.fb.group({
      id: [null],
      import: ['', Validators.required],
      tipusConsumId: ['', Validators.required],
      data: ['', Validators.required],
    });
  }

  public getValue(): Consum {
    return this.form.value;
  }


}
