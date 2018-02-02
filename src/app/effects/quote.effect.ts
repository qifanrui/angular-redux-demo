import { QuoteService } from './../services/quote.service';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import * as actions from '../actions/quote.action';
import { of } from 'rxjs/observable/of';

@Injectable()
export class QuoteEffect {

  constructor(private actions$: Actions, private service: QuoteService) { }

  @Effect()
  quote$: Observable<Action> = this.actions$
    .ofType(actions.ActionTypes.QUOTE)
    .switchMap(_ => this.service.getQuote()
      .map(quote => new actions.QouteSuccessAction(quote))
      .catch(err => of(new actions.QuoteFailAction(JSON.stringify(err))))
    );

}
