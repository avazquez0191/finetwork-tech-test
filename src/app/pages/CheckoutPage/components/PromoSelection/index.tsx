import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CheckIcon } from '@radix-ui/react-icons';
import { checkoutActions, fetchProduct, ICheckoutState, IProduct } from 'store/checkout';
import { RootState, AppDispatch } from 'store';
import { styled } from 'styled-components';

export function PromoSelection() {
  const dispatch = useDispatch<AppDispatch>();
  const checkout = useSelector<RootState, ICheckoutState>((state) => state.checkout);
  const product: IProduct = checkout.product;
  const taxName = checkout.taxName;
  const promoId = checkout.promoId;

  const productPrice = () => {
    const price = product?.prices?.find(price => price.name == taxName);
    return price?.price?.toFixed(2);
  };

  const selectPromoHandler = (id?: number) => {
    dispatch(checkoutActions.setPromoId(id));
  };

  const nextStepHandler = () => {
    dispatch(checkoutActions.nextStep());
  };

  return (
    <>
      <Title>01. Configura tu tarifa</Title>

      <Row>
        <Super>{product?.webInfo?.menuTitle}</Super>
        <Super>{productPrice()}€</Super>
      </Row>

      <p>{product?.webInfo?.description}</p>
      <FeatureList>
        {[...Array(product?.webInfo?.features?.length)].map((e, i) =>
          <FeatureItem key={i} >
            <CheckIcon style={{ color: '#5F0AFF' }} />
            {product?.webInfo?.features[i]}
          </FeatureItem>
        )}
      </FeatureList>

      <p>Elige la promoción que quieers aplicar a tu tarifa</p>
      <CardContainer>
        {[...Array(product?.promotions?.length)].map((e, i) =>
          <CardItem className={promoId == product?.promotions?.at(i)?.id ? "active " : ""} key={i} onClick={() => selectPromoHandler(product?.promotions?.at(i)?.id)} >
            <CardTitle>{product?.promotions?.at(i)?.name}</CardTitle>
            <CardDescription>{product?.promotions?.at(i)?.description}</CardDescription>
            {promoId == product?.promotions?.at(i)?.id && <CardTag>La mas vendida</CardTag>}
          </CardItem>
        )}
      </CardContainer>

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

const Super = styled.span`
  font-size: 50px;
  font-weight: bold;
  color: ${p => p.theme.colors.primaryText};
  margin: 1rem 0;
  letter-spacing: -2pt;
`;

const Row = styled.div`
  display: flex; 
  justify-content: space-between;
`;

const FeatureList = styled.li`
  list-style: none;
  padding: none;

`;

const FeatureItem = styled.li`
  list-style: none;
  padding: none;
`;

const CardContainer = styled.div`
  display: flex;
`;

const CardItem = styled.div`
  position: relative;
  border: 0;
  border-radius: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 0 30px 30px 0;
  background-color: ${p => p.theme.colors.secondary100};
  width: 300px;
  border: 1px solid transparent;

  &:hover, &:focus, &.active {
    border: 1px solid ${p => p.theme.colors.secondary400};
  }
`;

const CardTitle = styled.h2`
  font-size: 15px;
  margin-bottom: 8px;
`;

const CardDescription = styled.p`
  font-size: 12px;
  color: #333333;
`;

const CardTag = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${p => p.theme.colors.secondary400};
  color: ${p => p.theme.colors.secondary100};
  padding: 2px 3px;
`;