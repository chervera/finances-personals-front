import { Component, OnInit } from '@angular/core';
import * as CoreSelectors from 'src/app/core/store/core.selectors';
import { Store } from '@ngrx/store';
import { DespesaFixa } from 'src/app/core/model/despesa-fixa.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-despeses-fixes',
  templateUrl: './despeses-fixes.container.html',
  styleUrls: ['./despeses-fixes.container.scss']
})
export class DespesesFixesContainer implements OnInit {

  despesesFixes$: Observable<DespesaFixa[]> = this.store.select(CoreSelectors.selectDespesesFixes);

  constructor(
    private store: Store,
    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  onEdit(id: number) {
    this.router.navigate(['/despeses-fixes/' + id]);
  }

}
