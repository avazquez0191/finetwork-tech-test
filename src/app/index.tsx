/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from 'styles/GlobalStyle';

import { HomePage } from './pages/HomePage/Loadable';
import { CheckoutPage } from './pages/CheckoutPage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';

export function App() {
    return (
      <BrowserRouter>
        <Helmet>
            <meta charSet="utf-8" />
            <title>React Checkout</title>
        </Helmet>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        
        <GlobalStyle />
      </BrowserRouter>
    );
  }
