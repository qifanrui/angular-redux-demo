import { NgModule } from '@angular/core';
import { environment } from './../../environments/environment';
import { Quote } from './../domain';
import { Action, StoreModule, ActionReducerMap, compose, combineReducers, createSelector } from '@ngrx/store';
import * as fromQuote from './quote.reducer';
import { storeFreeze } from 'ngrx-store-freeze';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { } from '@ngrx/store/src/models';

export interface State {
  quote: fromQuote.State;
}

const initialState: State = {
  quote: fromQuote.initialState
};

const reducers: ActionReducerMap<State> = {
  quote: fromQuote.reducer
};

// const devReducer: ActionReducerMap<State> = compose(storeFreeze, combineReducers)(reducers);
// const proReducer: ActionReducerMap<State> = <ActionReducerMap<State>>combineReducers(reducers);


// export function reducer(state: State = initialState, action: any) {
//   if (environment.production) {
//     return proReducer(state, action);
//   } else {
//     return devReducer(state, action);
//   }
// }


/*
    Below are the selectors for this reducer. Make sure to make compact selectors as per
    requirements of your application.
*/

export const getQuoteState = (state: State) => state.quote;

export const getQuote = createSelector(getQuoteState, fromQuote.getQuote);

// export const getProperty2 = (state: State) => state.property2;



@NgModule({
  imports: [
    /**
     * StoreModule.provideStore  仅需引入一次，请把它包含在根模块或者 CoreModule 中
     * 我们这里为了方便组织，新建了一个 AppStoreModule，但也是只在 CoreModule 中引入的
     */
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
    // RouterStoreModule.connectRouter(),
    // DevTool 需要在 StoreModule 之后导入
    // StoreDevtoolsModule.instrumentOnlyWithExtension({
    //   maxAge: 5
    // })
  ]
})
export class AppStoreModule {
}
