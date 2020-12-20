import React, { FC, MouseEventHandler } from 'react';

import style from './Button.module.css';

type TProps = {
  clickEvent: MouseEventHandler;
  className?: string;
};

const Button: FC<TProps> = ({ clickEvent, className, children }) => {
  return (
    <button onClick={(event) => clickEvent(event)} className={`${style.button}${className ? ' ' + className : ''}`}>
      {children}
    </button>
  );
};

export default Button;
