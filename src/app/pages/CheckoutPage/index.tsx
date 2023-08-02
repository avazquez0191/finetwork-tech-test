import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { styled } from 'styled-components';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import { CustomerForm } from './components/CustomerForm';
import { PromoSelection } from './components/PromoSelection';
import { Resume } from './components/Resume';
import { checkoutActions, fetchProduct, ICheckoutState, IProduct } from 'store/checkout';
import { RootState, AppDispatch } from 'store';
import './style.css';

export function CheckoutPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const checkout = useSelector<RootState, ICheckoutState>((state) => state.checkout);
  const product: IProduct = checkout.product;
  const checkoutStep = checkout.currentStep;
  const tcChecked = checkout.tcChecked;

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);
   
  const signContractHandler = () => {
    alert('Producto contratado!');
    navigate('/');
  };
   
  const setTCChecke = () => {
    dispatch(checkoutActions.setTCChecked());
  };

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
        {product ? (
          <>
            <Title>¡Comenzamos con tu pedido!</Title>
            {
              {
                1: <><Separator /><PromoSelection /></>,
                2: <><Separator /><CustomerForm /></>,
                3: <><Separator /><Resume /></>,
                4: <>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Checkbox.Root className="CheckboxRoot" checked={tcChecked} onCheckedChange={setTCChecke} id="c1" required>
                        <Checkbox.Indicator className="CheckboxIndicator">
                          <CheckIcon />
                        </Checkbox.Indicator>
                      </Checkbox.Root>
                      <label className="Label" htmlFor="c1">
                        He leído y acepto los costes y las nuevas condiciones asociadas al cambio de tarifa.
                      </label>
                    </div>
                    <Button
                      className='btn'
                      type="button"
                      onClick={() => signContractHandler()}
                      disabled={!tcChecked}>
                      Aceptar y confirmar tarifa
                    </Button>
                  </div>
                </>,
              }[checkoutStep]
            }
          </>
        ) : (
          <>
            <h1>Checkout</h1>
            <h2>Seleccione un producto</h2>
          </>
        )}
      </PageWrapper>
    </>
  );
}

const Title = styled.h1`
  font-size: 28px;
  font-weight: normal;
  color: ${p => p.theme.colors.primaryText};
  margin: 1rem 0;
`;

const Separator = styled.hr`
  margin: 1rem 0;
  border-bottom: 2px solid  ${p => p.theme.colors.primaryText};
`;

const Button = styled.button`
  display: flex;
`;
