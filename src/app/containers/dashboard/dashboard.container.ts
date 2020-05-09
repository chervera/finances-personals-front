import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CoreSelectors from 'src/app/core/store/core.selectors';
import { map, filter, shareReplay, tap } from 'rxjs/operators';
import { Resum, ResumService, ResumAnual } from 'src/app/core/services/resum.service';
import { zip, Observable, combineLatest } from 'rxjs';
import { DespesaFixa } from 'src/app/core/model/despesa-fixa.model';
import { Ingres } from 'src/app/core/model/ingres.model';
import { Alimentacio } from 'src/app/core/model/alimentacio.model';
import { Consum } from 'src/app/core/model/consum.model';
import { setMainFilter } from 'src/app/core/store/core.actions';
import { FilterComponent } from 'src/app/shared/filter/filter.component';
import { Filter } from 'src/app/shared/filter/filter.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.container.html',
  styleUrls: ['./dashboard.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardContainer implements OnInit {

  @ViewChild(FilterComponent) filterComponent;

  despesesFixes$: Observable<DespesaFixa[]> = this.store.select(CoreSelectors.selectDespesesFixes).pipe(filter(data => data != null));
  ingressos$: Observable<Ingres[]> = this.store.select(CoreSelectors.selectIngressos).pipe(filter(data => data != null));
  alimentacions$: Observable<Alimentacio[]> = this.store.select(CoreSelectors.selectAlimentacions).pipe(filter(data => data != null));
  consums$: Observable<Consum[]> = this.store.select(CoreSelectors.selectConsums).pipe(filter(data => data != null));
  filter$: Observable<Filter> = this.store.select(CoreSelectors.selectMainFilter);

  resum$: Observable<ResumAnual> = combineLatest(
    this.despesesFixes$,
    this.ingressos$,
    this.consums$,
    this.alimentacions$
  ).pipe(
    map(([despesesFixes, ingressos, consums, alimentacions]: [DespesaFixa[], Ingres[], Consum[], Alimentacio[]]) => ResumService.generateResum(ingressos, despesesFixes, consums, alimentacions)),
    tap((data) => console.log(data))
  );

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  onFilter() {
    this.store.dispatch(setMainFilter({ payload: this.filterComponent.getValue() }))
  }

  onReset() {
    this.filterComponent.reset();
  }
}
