import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { DespesaFixa } from 'src/app/core/model/despesa-fixa.model';
import { Alimentacio } from 'src/app/core/model/alimentacio.model';

@Component({
  selector: 'app-alimentacions-list',
  templateUrl: './alimentacions-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlimentacionsListComponent implements OnInit {

  @Input() public alimentacions: Alimentacio[];
  @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(id: number) {
    this.edit.emit(id);
  }

  onDelete(id: number) {
    this.delete.emit(id);
  }

}
