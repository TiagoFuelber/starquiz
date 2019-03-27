import { PEOPLE } from '../actionTypes';

export const updatePeople = data =>
  ({
    type: PEOPLE.UPDATE,
    data
  });

export const getPaginatedPeople = page =>
  (dispatch, getState, container) => {
    container.getPaginatedPeople(page, {
      onSuccess: data =>
        dispatch(updatePeople(data))
    });
  };

export default { getPaginatedPeople };
