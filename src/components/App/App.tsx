import React, { FunctionComponent, Suspense } from 'react';
import style from './App.module.css';

const Counter = React.lazy(() => import(/* webpackChunkName: "Counter" */ '../Counter'));

const App: FunctionComponent = () => {
  return (
    <div className={style.app}>
      <Suspense fallback={null}>
        <Counter />
      </Suspense>
    </div>
  );
};

export default App;
