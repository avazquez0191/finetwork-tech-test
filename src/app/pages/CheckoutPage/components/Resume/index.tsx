import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkoutActions, fetchProduct, ICheckoutState, IProduct } from 'store/checkout';
import { RootState, AppDispatch } from 'store';
import { styled } from 'styled-components';

export function Resume() {
  const dispatch = useDispatch<AppDispatch>();
  const checkout = useSelector<RootState, ICheckoutState>((state) => state.checkout);
  const product: IProduct = checkout.product;

  const nextStepHandler = () => {
    dispatch(checkoutActions.nextStep());
  };

  return (
    <>
      <Title>03. Resumen de tu pedido</Title>

      <button
        className='btn'
        type="button"
        onClick={() => nextStepHandler()}>
        Continuar
      </button>
    </>
  );
}

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: ${p => p.theme.colors.primaryText};
  margin: 1rem 0;
`;