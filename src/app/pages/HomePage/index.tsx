import * as React from 'react';
import { Helmet } from 'react-helmet';
import { styled } from 'styled-components/macro';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import { StyleConstants } from 'styles/StyleConstants';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="React Checkout Home Page"
        />
      </Helmet>

      <NavBar />

      <PageWrapper>
        <Wrapper>
          <Title>React Checkout Web App</Title>
          <Lead>
            This is just an empty Home Page
          </Lead>
        </Wrapper>
      </PageWrapper>
    </>
  );
}

const Wrapper = styled.div`
  height: calc(100vh - ${StyleConstants.NAV_BAR_HEIGHT});
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: ${p => p.theme.text};
  margin: 1rem 0;
`;

const Lead = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.5;
  color: ${p => p.theme.textSecondary};
  margin: 0 0 1.5rem 0;
`;
