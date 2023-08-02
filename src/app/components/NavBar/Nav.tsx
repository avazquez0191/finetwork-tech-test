import * as React from 'react';
import styled from 'styled-components/macro';

export function Nav() {
  return (
    <Wrapper>
      <Description>
        Llámanos GRATIS al 1777
      </Description>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  margin-right: -1rem;
`;

const Description = styled.div`
  font-size: 0.875rem;
  color: ${p => p.theme.textSecondary};
  font-weight: normal;
`;