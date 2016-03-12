import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      //following ES6 syntax is same as return state.concat([action.payload.data]);
      return [ action.payload.data, ...state ]; // returns [city, city, city]
  }
  return state;
}

// note: do not manipulate existing array with 'push', rather concat it...
