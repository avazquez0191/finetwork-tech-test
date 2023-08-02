import * as React from 'react';
import styled from 'styled-components/macro';
import { Logo } from './Logo';
import { StyleConstants } from 'styles/StyleConstants';
import { Nav } from './Nav';
import { PageWrapper } from '../PageWrapper';

export function NavBar() {
  return (
    <Wrapper>
      <PageWrapper>
        <Logo />
        <Nav />
      </PageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  box-shadow: 0 1px 0 0 ${(props)=>props.theme.colors.secondary100};
  height: ${StyleConstants.NAV_BAR_HEIGHT};
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${(props)=>props.theme.colors.secondary100};
  z-index: 2;

  ${PageWrapper} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props)=>props.theme.colors.secondary100};
  }
`;
