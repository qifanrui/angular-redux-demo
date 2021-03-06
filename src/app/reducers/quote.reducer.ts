import * as actions from './../actions/quote.action';
import { Quote } from './../domain';
import { Action, createSelector } from '@ngrx/store';


export interface State {
  quote: Quote;
}

/*
    Below are the selectors for this reducer. Make sure to make compact selectors as per
    requirements of your application.
*/


export const initialState: State = {
  quote: {
    cn: '满足感在于不断的努力，而不是现有成就。全心努力定会胜利满满。',
    en: 'Satisfaction lies in the effort, not in the attainment. Full effort is full victory. ',
    pic: 'assets/img/quote_fallback.jpg'
  }
};


export function reducer(state: State = initialState, action: actions.Actions): State {
  switch (action.type) {
    case actions.ActionTypes.QUOTE_SUCCESS:
      console.log(action.payload);
      return { ...state, quote: action.payload };
    case actions.ActionTypes.QUOTE_FAIL:
    default:
      return state;
  }
}


/*
    Below are the selectors for this reducer. Make sure to make compact selectors as per
    requirements of your application.
*/

export const getQuote = (state: State) => state.quote;
