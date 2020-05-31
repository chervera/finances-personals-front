import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { TipusConsum } from 'src/app/core/model/tipus-consum.model';
import { Store } from '@ngrx/store';
import * as CoreSelectors from 'src/app/core/store/core.selectors';
import { TipusAlimentacio } from 'src/app/core/model/tipus-alimentacio.model';
import { FormTipusAlimentacionsComponent } from './tipus-alimentacions/components/form-tipus-alimentacions/form-tipus-alimentacions.component';
import { requestSaveTipusConsum, requestDeleteTipusConsum } from './tipus-consums/store/tipus-consums.actions';
import { requestSaveTipusAlimentacio, requestDeleteTipusAlimentacio } from './tipus-alimentacions/store/tipus-alimentacions.actions';
import { FormTipusConsumsComponent } from './tipus-consums/components/form-tipus-consums/form-tipus-consums.component';

@Component({
  selector: 'app-masters',
  templateUrl: './masters.container.html',
  styleUrls: ['./masters.container.scss']
})
export class MastersContainer implements OnInit {

  @ViewChild(FormTipusAlimentacionsComponent) formTipusAlimentacions;
  @ViewChild(FormTipusConsumsComponent) formTipusConsums;

  tipusAlimentacions$: Observable<TipusAlimentacio[]> = this.store.select(CoreSelectors.selectTipusAlimentacions);
  tipusConsums$: Observable<TipusConsum[]> = this.store.select(CoreSelectors.selectTipusConsums);

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  saveTipusAlimentacio() {
    const tipusAlimentacio = this.formTipusAlimentacions.getValue();
    this.formTipusAlimentacions.resetValue();
    this.store.dispatch(requestSaveTipusAlimentacio({ payload: tipusAlimentacio }));
  }

  deleteTipusAlimentacio(id) {
    this.store.dispatch(requestDeleteTipusAlimentacio({ payload: id }));
  }

  saveTipusConsum() {
    const tipusConsum = this.formTipusConsums.getValue();
    this.formTipusConsums.resetValue();
    this.store.dispatch(requestSaveTipusConsum({ payload: tipusConsum }));
  }

  deleteTipusConsum(id) {
    this.store.dispatch(requestDeleteTipusConsum({ payload: id }));
  }

}
