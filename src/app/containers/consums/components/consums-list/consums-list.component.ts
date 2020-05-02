import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { DespesaFixa } from 'src/app/core/model/despesa-fixa.model';
import { Consum } from 'src/app/core/model/consum.model';

@Component({
  selector: 'app-consums-list',
  templateUrl: './consums-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsumsListComponent implements OnInit {

  @Input() public consums: Consum[];
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
