import { expect } from 'chai';
import * as Answer from '../src/domain/Answer';

describe('Answer', () => {
  describe('isValidAnswer', () => {
    let answer = Answer.create('Luke Skywalker');

    it('should return true to a valid answer', () => {
      expect(Answer.isValidAnswer({ ...answer, givenAnswer: 'Luke Skywalker' }))
        .to.be.true;
    });

    it('should return false to a not valid answer', () => {
      expect(Answer.isValidAnswer({ ...answer, givenAnswer: 'Darth Vader' })).to
        .be.false;
    });
  });
});
