import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { DespesaFixa } from '../model/despesa-fixa.model';

@Injectable({
  providedIn: 'root'
})
export class DespesesFixesApiService {

  constructor() { }

  public findAll() {
    return of([
      {
        "dataInsercio": null,
        "id": 1,
        "import": 150,
        "descripcio": "test despesa fixa",
        "mesInici": 0,
        "mesFi": 0
      },
      {
        "dataInsercio": "2020-04-12T11:43:27.000Z",
        "id": 2,
        "import": 1,
        "descripcio": "despesa fixa 2",
        "mesInici": 1,
        "mesFi": 4
      }
    ]);
  }

  public find(id: string): Observable<DespesaFixa> {
    return of({
      "dataInsercio": null,
      "id": 1,
      "import": 150,
      "descripcio": "test despesa fixa",
      "mesInici": 0,
      "mesFi": 0
    });
  }
}
