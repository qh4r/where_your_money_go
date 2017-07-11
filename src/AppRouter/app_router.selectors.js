import { parse } from 'query-string';

const queryPicker = () => state =>
  parse(state.get('route').toJS().locationBeforeTransitions.search);

const locationStateSelector = () => {
  let prevState;
  let prevStateJS;

  return (state) => {
    const routingState = state.get('route');

    if (!routingState.equals(prevState)) {
      prevState = routingState;
      prevStateJS = routingState.toJS();
    }

    return prevStateJS;
  };
};

export {
  queryPicker,
  locationStateSelector,
};

