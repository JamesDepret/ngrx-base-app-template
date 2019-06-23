import {
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer,
  Action,
  combineReducers,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import * as fromLayout from '../../core/state/reducers/layout.reducer';
import { InjectionToken } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface State {
  layout: fromLayout.State;
  router: fromRouter.RouterReducerState<any>;
}

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
>('Root reducers token', {
  factory: () => ({
    layout: fromLayout.reducer,
    router: fromRouter.routerReducer,
  }),
});

// TODO : Change this to a proper logger or remove it. Handy for debugging devtools replacement with stackblitz
// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state, action) => {
    const result = reducer(state, action);
    /*
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();
    */

    return result;
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];

  
export const getLayoutState = createFeatureSelector<State, fromLayout.State>(
  'layout'
);

export const getShowSidenav = createSelector(
  getLayoutState,
  fromLayout.getShowSidenav
);
