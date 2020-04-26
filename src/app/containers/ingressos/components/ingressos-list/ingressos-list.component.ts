import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { DespesaFixa } from 'src/app/core/model/despesa-fixa.model';
import { Ingres } from 'src/app/core/model/ingres.model';

@Component({
  selector: 'app-ingressos-list',
  templateUrl: './ingressos-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IngressosListComponent implements OnInit {

  @Input() public ingressos: Ingres[];
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
