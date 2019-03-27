import { PEOPLE } from '../actionTypes';
import * as Person from '../../domain/Person';

export const updatePeople = data =>
  ({
    type: PEOPLE.UPDATE,
    data
  });

export const getPaginatedPeople = page =>
  (dispatch, getState, container) => {
    container.getPaginatedPeople(page, {
      onSuccess: (data) => {
        const mappedPeople = data.results.map(person =>
          Person.create(person));

        dispatch(updatePeople({ ...data, results: mappedPeople }));
      }
    });
  };

export default { getPaginatedPeople };
