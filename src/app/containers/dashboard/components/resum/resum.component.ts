import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DespesaFixa } from 'src/app/core/model/despesa-fixa.model';
import { Ingres } from 'src/app/core/model/ingres.model';
import { ResumService, Resum, ResumAnual } from 'src/app/core/services/resum.service';
@Component({
  selector: 'app-resum',
  templateUrl: './resum.component.html',
  styleUrls: ['./resum.component.scss']
})
export class ResumComponent implements OnInit {

  @Input() resum: ResumAnual;

  constructor() { }

  ngOnInit(): void {
  }

}
