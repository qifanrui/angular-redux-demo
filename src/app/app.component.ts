import { Observable } from 'rxjs/Observable';
import { Quote } from './domain';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './reducers';
import * as actions from './actions/quote.action';

import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  quote$: Observable<Quote>;

  constructor(private store$: Store<fromRoot.State>) {
    this.quote$ = this.store$.select(fromRoot.getQuote);
  }

  ngOnInit() {
    this.store$.dispatch({ type: actions.ActionTypes.QUOTE });
    this.quote$.subscribe(res => {
      console.log(JSON.stringify(res));
    });
  }
}
