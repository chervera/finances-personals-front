import { Component, OnInit, Input } from '@angular/core';
import { Filter } from './filter.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DateService } from 'src/app/core/services/date.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() filter: Filter;
  public form: FormGroup;

  months = DateService.generateMonthNumbers();
  years = DateService.generateYearNumbers();

  constructor(
    private fb: FormBuilder,
  ) {
    this.form = this.createForm();
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.filter) {
      this.form.patchValue(this.filter);
    }
  }

  createForm(): FormGroup {
    return this.fb.group({
      month: [''],
      year: [''],
    });
  }

  public getValue(): Filter {
    return this.form.value;
  }

  public reset(): void {
    this.form.reset();
  }

}
