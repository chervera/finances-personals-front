import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import * as CoreSelectors from 'src/app/core/store/core.selectors';
import { Store } from '@ngrx/store';
import { Observable, zip, combineLatest } from 'rxjs';
import { Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { ActionTypes } from './store/alimentacions.actions';
import { ActionTypes as CoreTypes, setMainFilter, requestAlimentacions } from 'src/app/core/store/core.actions';
import { Filter } from 'src/app/shared/filter/filter.model';
import { FilterComponent } from 'src/app/shared/filter/filter.component';
import { Alimentacio } from 'src/app/core/model/alimentacio.model';
import { requestDeleteAlimentacio } from './store/alimentacions.actions';
import { tap, map, shareReplay } from 'rxjs/operators';
import { TipusAlimentacio } from 'src/app/core/model/tipus-alimentacio.model';
import { Resum } from 'src/app/core/model/resum.model';
import { AlimentacionsService } from './services/alimentacions.service';


@Component({
  selector: 'app-alimentacions',
  templateUrl: './alimentacions.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlimentacionsContainer implements OnInit {

  @ViewChild(FilterComponent) filterComponent;

  alimentacions$: Observable<Alimentacio[]> = this.store.select(CoreSelectors.selectAlimentacions).pipe(
    map(alimentacios => alimentacios.slice(0, 25)),
    map(alimentacios => alimentacios.reverse()),
  )
  tipusAlimentacions$: Observable<TipusAlimentacio[]> = this.store.select(CoreSelectors.selectTipusAlimentacions);
  resum$: Observable<Resum<TipusAlimentacio>> = combineLatest(
    this.alimentacions$,
    this.tipusAlimentacions$
  ).pipe(
    map(([alimentacions, tipusAlimentacions]) => AlimentacionsService.generateResumLines(alimentacions, tipusAlimentacions)),
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
      ofType(ActionTypes.DELETE_ALIMENTACIO_SUCCESS, CoreTypes.SET_MAIN_FILTER),
    ).subscribe(() =>
      this.store.dispatch(requestAlimentacions())
    );
  }

  onEdit(id: number) {
    this.router.navigate(['/alimentacions/' + id]);
  }

  onDelete(id: number) {
    this.store.dispatch(requestDeleteAlimentacio({ payload: id }))
  }

  onFilter() {
    this.store.dispatch(setMainFilter({ payload: this.filterComponent.getValue() }))
  }

  onReset() {
    this.filterComponent.reset();
  }

}
