import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/core/model/user.model';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormLoginComponent implements OnInit {

  public form: FormGroup;

  @Output() login: EventEmitter<any> = new EventEmitter();

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.createForm();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.login.emit();
  }

  createForm(): FormGroup {
    return this.fb.group({
      id: [null],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public getValue(): User {
    return this.form.value;
  }

}
