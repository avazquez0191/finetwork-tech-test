import * as React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from 'styles/GlobalStyle';
import { HomePage } from './pages/HomePage/Loadable';
import { CheckoutPage } from './pages/CheckoutPage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';

const App = () => {
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

export default App;
