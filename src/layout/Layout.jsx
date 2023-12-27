import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, NavLinkStyled, NavStyled } from './Layout.styled';
import { Container } from '../components/uiComponents/Container/Container.styled';

const Layout = () => {
  return (
    <>
      <Container>
        <Header>
          <NavStyled>
            <NavLinkStyled to="/">Home</NavLinkStyled>
            <NavLinkStyled to="/movies">Movies</NavLinkStyled>
          </NavStyled>
        </Header>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
