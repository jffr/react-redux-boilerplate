import React, { FC } from 'react';
import style from './Counter.module.css';
import Button from '../Button/Button';

type TProps = {
  value: number;
  buttonCounter: number,
  increment: () => void;
  decrement: () => void;
};

const Counter: FC<TProps> = ({ value, buttonCounter, increment, decrement }) => {
  return (
    <div className={style.counter}>
      {!!buttonCounter && <span className={style.counter__label}>I have humbly pressed buttons for {buttonCounter} time(s)</span>}
      <span className={style.counter__count}>{value}</span>
      <Button clickEvent={increment} className={style.counter__button}>Increment</Button>
      <Button clickEvent={decrement} className={style.counter__button}>Decrement</Button>
    </div>
  );
};

export default Counter;
