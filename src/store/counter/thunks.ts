import { AppThunk } from '../typings';
import { increment } from './actions';

function thinking(): Promise<boolean> {
  return Promise.resolve(true);
}

export const incrementAsync = (): AppThunk => {
  return async(dispatch) => {
    await thinking();
    dispatch(increment());
  };
};
