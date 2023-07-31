import React from 'react';
import './style.css';
import { Helmet } from 'react-helmet';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';

export function CheckoutPage() {
  return (
    <>
      <Helmet>
        <title>Checkout</title>
        <meta
          name="description"
          content="React Checkout Home Page"
        />
      </Helmet>

      <NavBar />
      
      <PageWrapper>
        <h1>Checkout</h1>
      </PageWrapper>
    </>
  );
}
