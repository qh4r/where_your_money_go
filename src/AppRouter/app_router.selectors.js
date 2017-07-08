import { createSelector } from 'reselect';

const locationPicker = () => (state, props) => props.location;

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

const locationSelector = () => createSelector(
  locationPicker(),
  location => location,
);

export {
  locationSelector,
  locationStateSelector,
};

