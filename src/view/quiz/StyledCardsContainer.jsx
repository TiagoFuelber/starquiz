import Styled from 'styled-components';

const StyledCardsContainer = Styled.div`
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(5, 1fr);
  grid-gap: 10px;
`;

export default StyledCardsContainer;
