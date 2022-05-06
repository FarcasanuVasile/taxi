import { Action } from '@ngrx/store';

export enum StepsActionsType {
  ChangeStepAction = '[Steps] Change Step Action',
}

export class ChangeStep implements Action {
  readonly type = StepsActionsType.ChangeStepAction;
  constructor(public payload: number) {}
}

export type StepsActions = ChangeStep;
