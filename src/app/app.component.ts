import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { requestDespesesFixes } from './core/store/core.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
    this.store.dispatch(requestDespesesFixes());
  }

}
