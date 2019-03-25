import React, { Component } from 'react';
import { connect } from 'react-redux';
import StyledQuizPage from './StyledQuizPage';
import Container from '../ui/Container';
import Timer from '../ui/timer/Timer';
import { addAnswer } from '../../state/actionCreators';

class GamePage extends Component {
  static endGame() {
    alert('End of time!');
  }

  render() {
    const { addAnswer } = this.props;

    return (
      <StyledQuizPage>
        <Container>
          <div className="header">
            <h1 className="center upper">Game page</h1>
            <Timer timeInSeconds={120} onEndTimer={GamePage.endGame} />
          </div>
        </Container>
      </StyledQuizPage>
    );
  }
}

const mapStateToProps = ({ quiz }) => ({
  quiz
});

const mapDispatchToProps = dispatch => ({
  addAnswer: () => dispatch(addAnswer('Luke Skywalker', 'Darth Vader'))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GamePage);
