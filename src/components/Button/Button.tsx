import React, { FC, MouseEventHandler } from 'react';
import cn from 'classnames';
import style from './Button.module.css';

type TProps = {
  clickEvent: MouseEventHandler;
  className?: string;
};

const Button: FC<TProps> = ({
  clickEvent,
  className,
  children
}) => (
  <button
    onClick={(event) => clickEvent(event)}
    className={cn(style.button, className)}
  >
    {children}
  </button>
);

export default Button;
