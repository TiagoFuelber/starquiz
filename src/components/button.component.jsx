import Styled from 'styled-components';
import { Yellow, Black } from '../styles/constants';

const Button = Styled.button`
  color: ${Black};
  background-color: ${Yellow};
  border: none;
  padding: 20px;
  font-weight: 800;
  font-size: 30px;
  width: ${({ width }) => width || 'auto'};
  transition: transform 0.5s;

  :hover {
    cursor: pointer;
    transform: scale(0.98);
  }
`;

export default Button;
