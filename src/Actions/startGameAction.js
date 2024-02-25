import * as types from '../types';
import makeCard from '../genreateCard'; // Fix the path to generateCard

export const startGame = () => dispatch => {
  console.log(makeCard());
  dispatch({ type: types.START_GAME, payload: makeCard() });
};


