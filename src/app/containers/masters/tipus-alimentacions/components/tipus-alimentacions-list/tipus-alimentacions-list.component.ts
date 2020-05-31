import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { TipusAlimentacio } from 'src/app/core/model/tipus-alimentacio.model';

@Component({
  selector: 'app-tipus-alimentacions-list',
  templateUrl: './tipus-alimentacions-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TipusAlimentacionsListComponent implements OnInit {

  @Input() public tipusAlimentacions: TipusAlimentacio[];
  @Output() delete = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(id: number) {
    this.delete.emit(id);
  }

}
