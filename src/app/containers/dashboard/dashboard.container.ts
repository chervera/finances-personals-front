import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CoreSelectors from 'src/app/core/store/core.selectors';
import { tap, map, filter } from 'rxjs/operators';
import { Resum, ResumService } from 'src/app/core/services/resum.service';
import { zip, pipe, Observable } from 'rxjs';
import { DespesaFixa } from 'src/app/core/model/despesa-fixa.model';
import { Ingres } from 'src/app/core/model/ingres.model';
import { DespesaAlimentacio } from 'src/app/core/model/despesa-alimentacio.model';
import { DespesaConsum } from 'src/app/core/model/despesa-consum.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.container.html',
  styleUrls: ['./dashboard.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardContainer implements OnInit {

  despesesFixes$: Observable<DespesaFixa[]> = this.store.select(CoreSelectors.selectDespesesFixes).pipe(filter(data => data != null));
  ingressos$: Observable<Ingres[]> = this.store.select(CoreSelectors.selectIngressos).pipe(filter(data => data != null));
  alimentacions$: Observable<DespesaAlimentacio[]> = this.store.select(CoreSelectors.selectAlimentacio).pipe(filter(data => data != null));
  consums$: Observable<DespesaConsum[]> = this.store.select(CoreSelectors.selectConsums).pipe(filter(data => data != null));

  resums$: Observable<Resum[]> = zip(
    this.despesesFixes$,
    this.ingressos$,
    this.consums$,
    this.alimentacions$
  ).pipe(
    map(([despesesFixes, ingressos, consums, alimentacions]: [DespesaFixa[], Ingres[], DespesaConsum[], DespesaAlimentacio[]]) => ResumService.generateResum(ingressos, despesesFixes, consums, alimentacions))
  );

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.resums$.subscribe((resum) => {
      console.log('resum');
      console.table(resum);
    })
  }
}
