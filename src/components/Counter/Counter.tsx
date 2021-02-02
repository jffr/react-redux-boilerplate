import React, { FC } from 'react';
import Button from '../Button/Button';
import style from './Counter.module.css';

type TProps = {
  value: number;
  buttonCounter: number,
  increment: () => void;
  decrement: () => void;
};

const Counter: FC<TProps> = ({
  value,
  buttonCounter,
  increment,
  decrement
}) => (
  <div className={style.counter}>
    <span className={style.counter__count}>{value}</span>
    <Button clickEvent={increment} className={style.counter__button}>Increment</Button>
    <Button clickEvent={decrement} className={style.counter__button}>Decrement</Button>
    {buttonCounter > 0 && (
      <span className={style.counter__label}>
        I have humbly pressed buttons for {buttonCounter} time(s)
      </span>
    )}
  </div>
);

export default Counter;
