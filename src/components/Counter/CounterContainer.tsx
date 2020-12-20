import React, { FC } from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { increment, decrement } from '../../store/counter/actions';

type TProps = {
  counter: number,
  buttonCounter: number,
  increment: typeof increment,
  decrement: typeof decrement
};

const CounterContainer: FC<TProps> = (props) => {
  return (
    <>
      <Counter value={props.counter} {...props} />
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  counter: state.counter.counter,
  buttonCounter: state.counter.buttonCounter
});

const mapDispatchToProps = {
  increment: increment,
  decrement: decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
