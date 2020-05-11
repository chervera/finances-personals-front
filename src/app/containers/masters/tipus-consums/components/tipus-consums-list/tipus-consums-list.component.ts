import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { TipusConsum } from 'src/app/core/model/tipus-consum.model';

@Component({
  selector: 'app-tipus-consums-list',
  templateUrl: './tipus-consums-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TipusConsumsListComponent implements OnInit {

  @Input() public tipusConsums: TipusConsum[];
  @Output() delete = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(id: number) {
    this.delete.emit(id);
  }

}
