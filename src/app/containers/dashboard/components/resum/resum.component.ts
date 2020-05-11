import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { DespesaFixa } from 'src/app/core/model/despesa-fixa.model';
import { Ingres } from 'src/app/core/model/ingres.model';
import { ResumService, Resum, ResumAnual } from 'src/app/core/services/resum.service';
@Component({
  selector: 'app-resum',
  templateUrl: './resum.component.html',
  styleUrls: ['./resum.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResumComponent implements OnInit {

  @Input() resum: ResumAnual;

  readonly currentMonth = new Date().getMonth() + 1;

  constructor() { }

  ngOnInit(): void {
  }

}
