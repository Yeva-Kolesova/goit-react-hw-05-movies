import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 10px;
`;
export const MovieDetailsInfo = styled.div`
  display: flex;
  gap: 30px;
`;
export const MovieImage = styled.img`
  border-radius: 5px;
`;
export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const MovieTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: 500;
`;

export const Heading4 = styled.h4`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 500;
`;
export const MovieText = styled.h4`
  margin-bottom: 5px;
  font-size: 15px;
  font-weight: 400;
`;
export const WrapperLinks = styled.div`
  display: flex;
  gap: 20px;
  margin: 0 auto;
`;
export const NavStyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 5px;

  padding: 10px;
`;
