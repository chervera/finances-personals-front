import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Actions, ofType } from '@ngrx/effects';
import { ActionTypes, requestUpdateConsum, requestSaveConsum, requestConsum, createConsum } from '../../store/consums.actions';
import { Consum } from 'src/app/core/model/consum.model';
import { selectConsum } from '../../store/consums.selectors';
import { requestConsums } from 'src/app/core/store/core.actions';
import { FormConsumComponent } from './components/form-consum/form-consum.component';
import { TipusConsum } from 'src/app/core/model/tipus-consum.model';
import { selectTipusConsums } from 'src/app/core/store/core.selectors';

@Component({
  selector: 'app-consum',
  templateUrl: './consum.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsumContainer implements OnInit {

  @ViewChild(FormConsumComponent) formComponent;

  consum$: Observable<Consum> = this.store.select(selectConsum);
  tipusConsums$: Observable<TipusConsum[]> = this.store.select(selectTipusConsums);

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router,
    private actions$: Actions
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.get('id')) {
        this.store.dispatch(requestConsum({ payload: params.get('id') }));
      } else {
        this.store.dispatch(createConsum());
      }
    });

    this.actions$.pipe(
      ofType(ActionTypes.CREATE_CONSUM_SUCCESS, ActionTypes.UPDATE_CONSUM_SUCCESS),
      take(1)
    ).subscribe(() => {
      this.store.dispatch(requestConsums());
      this.router.navigate(['/consums'])
    });
  }

  save() {
    const consum = this.formComponent.getValue();
    if (consum.id) {
      this.store.dispatch(requestUpdateConsum({ payload: consum }));
    } else {
      this.store.dispatch(requestSaveConsum({ payload: consum }));
    }
  }

}
