import {
  INCREMENT,
  DECREMENT,
  CounterState,
  CounterActions
} from './types';

const initialState: CounterState = {
  buttonCounter: 0,
  counter: 0
};

export default function greetReducer(state = initialState, action: CounterActions): CounterState {
  switch (action.type) {
    case INCREMENT:
      return {
        buttonCounter: state.buttonCounter + 1,
        counter: state.counter + 1
      };
    case DECREMENT: {
      return {
        buttonCounter: state.buttonCounter + 1,
        counter: state.counter - 1
      };
    }
    default:
      return state;
  }
}
