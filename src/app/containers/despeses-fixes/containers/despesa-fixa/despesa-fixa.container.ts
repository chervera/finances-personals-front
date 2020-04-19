import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { requestDespesaFixa, createDespesaFixa } from '../../store/despeses-fixes.actions';
import { DespesaFixa } from 'src/app/core/model/despesa-fixa.model';
import { Observable } from 'rxjs';
import { selectDespesaFixa } from '../../store/despeses-fixes.selectors';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-despesa-fixa',
  templateUrl: './despesa-fixa.container.html',
  styleUrls: ['./despesa-fixa.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DespesaFixaContainer implements OnInit {

  despesaFixa$: Observable<DespesaFixa> = this.store.select(selectDespesaFixa);

  constructor(
    private store: Store,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.get('id')) {
        this.store.dispatch(requestDespesaFixa({ payload: params.get('id') }));
      } else {
        this.store.dispatch(createDespesaFixa());
      }
    });
  }

}
