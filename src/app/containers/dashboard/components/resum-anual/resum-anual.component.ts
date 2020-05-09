import { Component, OnInit, Input } from '@angular/core';
import { ResumAnual } from 'src/app/core/services/resum.service';

@Component({
  selector: 'app-resum-anual',
  templateUrl: './resum-anual.component.html',
  styleUrls: ['./resum-anual.component.scss']
})
export class ResumAnualComponent implements OnInit {

  @Input() resum: ResumAnual;

  constructor() { }

  ngOnInit(): void {
  }

}
