import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges } from '@angular/core';
import { Alimentacio } from 'src/app/core/model/alimentacio.model';
import { TipusAlimentacio } from 'src/app/core/model/tipus-alimentacio.model';
import { DateService } from 'src/app/core/services/date.service';
import { Resum } from 'src/app/core/model/resum.model';




@Component({
  selector: 'app-alimentacions-resum',
  templateUrl: './alimentacions-resum.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlimentacionsResumComponent implements OnInit {

  @Input() public resum: Resum<TipusAlimentacio>;

  constructor() { }

  ngOnInit(): void {
  }

}
