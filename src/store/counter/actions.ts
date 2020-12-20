import { ActionCreator } from 'redux';
import { INCREMENT, DECREMENT, IncrementAction, DecrementAction } from './types';

export const increment: ActionCreator<IncrementAction> = () => {
  return { type: INCREMENT };
};

export const decrement: ActionCreator<DecrementAction> = () => {
  return { type: DECREMENT };
};
