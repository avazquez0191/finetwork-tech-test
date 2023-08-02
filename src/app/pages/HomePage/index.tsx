import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { styled } from 'styled-components/macro';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import { StyleConstants } from 'styles/StyleConstants';
import { updateProduct } from 'store/checkout';
import { AppDispatch } from 'store';
import productJSON from 'data/product.json';

export function HomePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const product = productJSON;
  
  const selectProductHandler = () => {
    dispatch(updateProduct(productJSON));
    navigate('/checkout');
  };

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
          <Title>{product.name}</Title>
          <Lead>{product.description}</Lead>
          <Button onClick={selectProductHandler}>
            Lo quiero!
          </Button>
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
  color: ${p => p.theme.colors.primaryText};
  margin: 1rem 0;
`;

const Lead = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.5;
  color: ${p => p.theme.colors.primaryText};
  margin: 0 0 1.5rem 0;
`;

const Button = styled.button`
  background-color: ${p => p.theme.colors.primary};
  border: none;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  margin: 10px 0px;
  cursor: pointer;
`;
