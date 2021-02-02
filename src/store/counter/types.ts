// Action types
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Actions
export type IncrementAction = { type: typeof INCREMENT };
export type DecrementAction = { type: typeof DECREMENT };
export type CounterActions = IncrementAction | DecrementAction;

// State
export type CounterState = {
  counter: number;
  buttonCounter: number;
};
