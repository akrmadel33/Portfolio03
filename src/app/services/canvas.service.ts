import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CanvasService {

  constructor() { }

  private loadingSource = new Subject<boolean>();
  loading$:Observable<boolean> = this.loadingSource.asObservable();

  setLoading(val) {
    this.loadingSource.next(val);
  }

}
