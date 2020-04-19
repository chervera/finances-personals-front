import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { DespesaFixa } from 'src/app/core/model/despesa-fixa.model';

@Component({
  selector: 'app-despeses-fixes-list',
  templateUrl: './despeses-fixes-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DespesesFixesListComponent implements OnInit {

  @Input() public despesesFixes: DespesaFixa[];
  @Output() edit = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(id: number) {
    this.edit.emit(id);
  }

}
