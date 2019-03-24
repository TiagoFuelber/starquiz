import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Black, Yellow } from '../styles/constants';

const LinkButton = Styled(Link)`
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

  display: block;
  text-decoration: none;
  text-align: center;
`;

export default LinkButton;
