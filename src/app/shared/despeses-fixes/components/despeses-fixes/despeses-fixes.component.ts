import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { DespesaFixa } from 'src/app/core/model/despesa-fixa.model';

@Component({
  selector: 'app-despeses-fixes',
  templateUrl: './despeses-fixes.component.html',
  styleUrls: ['./despeses-fixes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DespesesFixesComponent implements OnInit {

  @Input()
  public despesesFixes: DespesaFixa[];

  constructor() { }

  ngOnInit(): void {
  }

}
