import { Action } from '@ngrx/store';

export interface IState {
  currentStep: number;
  steps: [];
}
const initialState: IState = {
  currentStep: 0,
  steps: [
    { id: 0, title: 'Alege traseul' },
    { id: 1, title: 'Alege masina' },
    { id: 2, title: 'Introdu datele personale' },
  ],
};

export function stepsReducer(state = initialState, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}
