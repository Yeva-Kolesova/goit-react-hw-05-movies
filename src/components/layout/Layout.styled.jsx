import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid black;
`;
export const NavStyled = styled.nav`
  display: flex;
  gap: 20px;
`;
export const NavLinkStyled = styled(NavLink)`
  color: black;
  font-weight: 700;
  font-size: 32px;
  text-decoration: none;

  &:hover,
  &:focus-visible,
  &:active {
    color: orange;
  }
`;
