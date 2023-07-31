import * as React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as FiLogoBlack } from 'assets/logo/finetwork_black.svg';

export function Logo() {
  return (
    <Wrapper>
      <FiLogoBlack className='logo'/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  .logo {
    width: 4.5rem;
    height: 4.5rem;
  }
`;
