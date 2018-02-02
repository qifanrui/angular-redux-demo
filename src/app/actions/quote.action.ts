import { Quote } from './../domain/quote.model';
import { Action } from '@ngrx/store';
import { type } from '../utils';

export const ActionTypes = {
  QUOTE: type('[Quote] Quote'),
  QUOTE_SUCCESS: type('[Quote] Quote Success'),
  QUOTE_FAIL: type('[Quote] Quote Fail')
};

export class QouteAction implements Action {
  readonly type = ActionTypes.QUOTE;

  constructor(public payload: any) { }
}

export class QouteSuccessAction implements Action {
  readonly type = ActionTypes.QUOTE_SUCCESS;

  constructor(public payload: Quote) { }
}

export class QuoteFailAction implements Action {
  type = ActionTypes.QUOTE_FAIL;

  constructor(public payload: string) {
  }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = QouteAction
  | QouteSuccessAction
  | QuoteFailAction;
