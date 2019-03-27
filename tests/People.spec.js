import { expect } from 'chai';
import { getPeopleFromPage } from '../src/infra/PeopleRepository';

describe('People', () => {
  it('should get a list of people', async () => {
    const data = await getPeopleFromPage(1);

    console.log(data);
  });
});
