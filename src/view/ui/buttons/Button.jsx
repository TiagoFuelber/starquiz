import Styled from 'styled-components';
import getBaseButtonStyle from './getbaseButtonStyle';

const Button = Styled.button`
  ${getBaseButtonStyle(({ width }) => width)}

  :hover {
    cursor: pointer;
    transform: scale(0.98);
  }
`;

export default Button;
