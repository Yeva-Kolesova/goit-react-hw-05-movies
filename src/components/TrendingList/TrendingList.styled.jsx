import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Heading2 = styled.h2`
  font-size: 40px;
`;

export const StyledList = styled.ul`
  & li {
    padding-bottom: 5px;
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    color: orange;
  }
`;
