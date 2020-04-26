import { Component, OnInit, ViewChild } from '@angular/core';
import * as CoreSelectors from 'src/app/core/store/core.selectors';
import { Store } from '@ngrx/store';
import { DespesaFixa } from 'src/app/core/model/despesa-fixa.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { requestDeleteDespesaFixa } from './store/despeses-fixes.actions';
import { Actions, ofType } from '@ngrx/effects';
import { ActionTypes } from './store/despeses-fixes.actions';
import { ActionTypes as CoreTypes, setMainFilter } from 'src/app/core/store/core.actions';
import { requestDespesesFixes } from 'src/app/core/store/core.actions';
import { Filter } from 'src/app/shared/filter/filter.model';
import { FilterComponent } from 'src/app/shared/filter/filter.component';


@Component({
  selector: 'app-despeses-fixes',
  templateUrl: './despeses-fixes.container.html',
  styleUrls: ['./despeses-fixes.container.scss']
})
export class DespesesFixesContainer implements OnInit {

  @ViewChild(FilterComponent) filterComponent;


  despesesFixes$: Observable<DespesaFixa[]> = this.store.select(CoreSelectors.selectDespesesFixes);
  filter$: Observable<Filter> = this.store.select(CoreSelectors.selectMainFilter);

  constructor(
    private store: Store,
    private router: Router,
    private actions$: Actions
  ) { }

  ngOnInit(): void {
    this.actions$.pipe(
      ofType(ActionTypes.DELETE_DESPESA_FIXA_SUCCESS, CoreTypes.SET_MAIN_FILTER),
    ).subscribe(() =>
      this.store.dispatch(requestDespesesFixes())
    );
  }

  onEdit(id: number) {
    this.router.navigate(['/despeses-fixes/' + id]);
  }

  onDelete(id: number) {
    this.store.dispatch(requestDeleteDespesaFixa({ payload: id }))
  }

  onFilter() {
    this.store.dispatch(setMainFilter({ payload: this.filterComponent.getValue() }))
  }

  onReset() {
    this.filterComponent.reset();
  }

}
