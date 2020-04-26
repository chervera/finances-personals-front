import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import * as CoreSelectors from 'src/app/core/store/core.selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { ActionTypes } from './store/ingressos.actions';
import { ActionTypes as CoreTypes, setMainFilter, requestIngressos } from 'src/app/core/store/core.actions';
import { Filter } from 'src/app/shared/filter/filter.model';
import { FilterComponent } from 'src/app/shared/filter/filter.component';
import { Ingres } from 'src/app/core/model/ingres.model';
import { requestDeleteIngres } from './store/ingressos.actions';


@Component({
  selector: 'app-ingressos',
  templateUrl: './ingressos.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IngressosContainer implements OnInit {

  @ViewChild(FilterComponent) filterComponent;

  ingressos$: Observable<Ingres[]> = this.store.select(CoreSelectors.selectIngressos);
  filter$: Observable<Filter> = this.store.select(CoreSelectors.selectMainFilter);

  constructor(
    private store: Store,
    private router: Router,
    private actions$: Actions
  ) { }

  ngOnInit(): void {
    this.actions$.pipe(
      ofType(ActionTypes.DELETE_INGRES_SUCCESS, CoreTypes.SET_MAIN_FILTER),
    ).subscribe(() =>
      this.store.dispatch(requestIngressos())
    );
  }

  onEdit(id: number) {
    this.router.navigate(['/ingressos/' + id]);
  }

  onDelete(id: number) {
    this.store.dispatch(requestDeleteIngres({ payload: id }))
  }

  onFilter() {
    this.store.dispatch(setMainFilter({ payload: this.filterComponent.getValue() }))
  }

  onReset() {
    this.filterComponent.reset();
  }

}
