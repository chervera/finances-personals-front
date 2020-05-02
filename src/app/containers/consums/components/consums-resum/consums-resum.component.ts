import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges } from '@angular/core';
import { Consum } from 'src/app/core/model/consum.model';
import { TipusConsum } from 'src/app/core/model/tipus-consum.model';
import { DateService } from 'src/app/core/services/date.service';
import { Resum } from 'src/app/core/model/resum.model';




@Component({
  selector: 'app-consums-resum',
  templateUrl: './consums-resum.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsumsResumComponent implements OnInit {

  @Input() public resum: Resum<TipusConsum>;

  constructor() { }

  ngOnInit(): void {
  }

}
