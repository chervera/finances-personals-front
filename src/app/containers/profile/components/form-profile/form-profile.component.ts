import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Consum } from 'src/app/core/model/consum.model';
import { TipusConsum } from 'src/app/core/model/tipus-consum.model';
import { User } from 'src/app/core/model/user.model';

@Component({
  selector: 'app-form-profile',
  templateUrl: './form-profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormProfileComponent implements OnInit, OnChanges {

  @Input() user: User;

  public form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.createForm();
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.user) {
      this.form.patchValue(this.user);
    }
  }

  createForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
    });
  }

  public getValue(): Consum {
    return this.form.value;
  }


}
