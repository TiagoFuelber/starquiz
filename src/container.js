import PeopleRepository from './infra/PeopleRepository';
import makeGetPaginatedPeople from './application/getPaginatedPeople';

const getPaginatedPeople = makeGetPaginatedPeople({ PeopleRepository });

export { getPaginatedPeople };
