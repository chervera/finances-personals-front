import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { requestDespesesFixes, toggleIsMenuShowed, requestIngressos, requestConsums, requestAlimentacio } from './core/store/core.actions';
import * as CoreSelectors from 'src/app/core/store/core.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  isMenuShowed$: Observable<boolean> = this.store.select(CoreSelectors.selectIsMenuShowed);

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
    this.store.dispatch(requestDespesesFixes());
    this.store.dispatch(requestIngressos());
    this.store.dispatch(requestConsums());
    this.store.dispatch(requestAlimentacio());
  }

  toggleMenu() {
    this.store.dispatch(toggleIsMenuShowed());
  }

}
