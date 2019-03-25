import { expect } from 'chai';
import uuidv1 from 'uuid/v1';
import * as Quiz from '../src/domain/Quiz';

describe('Quiz', () => {
  let quiz = Quiz.create();
  const id1 = uuidv1();

  quiz = {
    ...quiz,
    answers: [
      {
        id: id1,
        rightAnswer: 'Answer 1',
        givenAnswer: 'Answer 1',
        helpWasUsed: false
      },
      {
        id: uuidv1(),
        rightAnswer: 'Answer 2',
        givenAnswer: 'Answer 2',
        helpWasUsed: false
      },
      {
        id: uuidv1(),
        rightAnswer: 'Answer 3',
        givenAnswer: 'Answer 3',
        helpWasUsed: false
      },
      {
        id: uuidv1(),
        rightAnswer: 'Answer 4',
        givenAnswer: 'Answer 4',
        helpWasUsed: true
      },
      {
        id: uuidv1(),
        rightAnswer: 'Answer 5',
        givenAnswer: 'Answer 6',
        helpWasUsed: false
      }
    ]
  };

  it('should sum 35 points', () => {
    expect(Quiz.getTotalPoints(quiz)).to.be.equal(35);
  });

  it('should get existing answer by id', () => {
    expect(Quiz.getAnswerById(quiz, id1)).to.include({
      id: id1,
      rightAnswer: 'Answer 1',
      givenAnswer: 'Answer 1',
      helpWasUsed: false
    });
  });

  describe('addAnswer', () => {
    it('should return a new answer to the current quiz', () => {
      const newAnswer = Quiz.addAnswer({
        rightAnswer: 'Answer 6',
        givenAnswer: 'Answer 1',
        quiz
      });

      expect(quiz.answers).to.not.include(newAnswer);
    });
  });

  describe('updateAnswer', () => {
    it('should modify an existing answer', () => {
      quiz = {
        ...quiz,
        answers: Quiz.updateAnswer(id1, 'Answer 2', quiz)
      };

      expect(quiz.answers[0]).to.deep.equal({
        id: id1,
        rightAnswer: 'Answer 1',
        givenAnswer: 'Answer 2',
        helpWasUsed: false
      });
    });
  });
});
