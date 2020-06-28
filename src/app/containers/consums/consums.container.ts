import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import * as CoreSelectors from 'src/app/core/store/core.selectors';
import { Store } from '@ngrx/store';
import { Observable, combineLatest } from 'rxjs';
import { Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { ActionTypes } from './store/consums.actions';
import { ActionTypes as CoreTypes, setMainFilter, requestConsums } from 'src/app/core/store/core.actions';
import { Filter } from 'src/app/shared/filter/filter.model';
import { FilterComponent } from 'src/app/shared/filter/filter.component';
import { Consum } from 'src/app/core/model/consum.model';
import { requestDeleteConsum } from './store/consums.actions';
import { TipusConsum } from 'src/app/core/model/tipus-consum.model';
import { Resum } from 'src/app/core/model/resum.model';
import { ConsumsService } from './services/consums.service';
import { map, filter, share, shareReplay } from 'rxjs/operators';




@Component({
  selector: 'app-consums',
  templateUrl: './consums.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsumsContainer implements OnInit {

  @ViewChild(FilterComponent) filterComponent;

  consums$: Observable<Consum[]> = this.store.select(CoreSelectors.selectConsums).pipe(
    map(consums => consums.slice(0, 25)),
    map(consums => consums.reverse()),
  );
  tipusConsums$: Observable<TipusConsum[]> = this.store.select(CoreSelectors.selectTipusConsums);
  resum$: Observable<Resum<TipusConsum>> = combineLatest(
    this.consums$,
    this.tipusConsums$
  ).pipe(
    map(([consums, tipusConsums]) => ConsumsService.generateResumLines(consums, tipusConsums)),
    shareReplay()
  );
  filter$: Observable<Filter> = this.store.select(CoreSelectors.selectMainFilter);

  constructor(
    private store: Store,
    private router: Router,
    private actions$: Actions
  ) { }

  ngOnInit(): void {
    this.actions$.pipe(
      ofType(ActionTypes.DELETE_CONSUM_SUCCESS, CoreTypes.SET_MAIN_FILTER),
    ).subscribe(() =>
      this.store.dispatch(requestConsums())
    );
  }

  onEdit(id: number) {
    this.router.navigate(['/consums/' + id]);
  }

  onDelete(id: number) {
    this.store.dispatch(requestDeleteConsum({ payload: id }))
  }

  onFilter() {
    this.store.dispatch(setMainFilter({ payload: this.filterComponent.getValue() }))
  }

  onReset() {
    this.filterComponent.reset();
  }

}
