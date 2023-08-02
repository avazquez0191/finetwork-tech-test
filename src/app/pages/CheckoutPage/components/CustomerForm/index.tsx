import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { customerActions, ICustomerState, ICustomer } from 'store/customer';
import { checkoutActions, fetchProduct, ICheckoutState, IProduct } from 'store/checkout';
import { RootState, AppDispatch } from 'store';
import { styled } from 'styled-components';

export function CustomerForm() {
  const dispatch = useDispatch<AppDispatch>();
  const customerState = useSelector<RootState, ICustomerState>((state) => state.customer);
  const customer = customerState.customer;

  const nextStepHandler = () => {
    dispatch(checkoutActions.nextStep());
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    const dirtyStateCustomer = {
      ...customer,
      [name]: value
    };
    dispatch(customerActions.setCustomer(dirtyStateCustomer));
  };

  const handleSubmit = () => {
    // TODO - Form Validations

    // const { firstName, email, phone } = customer;
    // const errors: any = {};

    // if (!firstName) {
    //   errors.firstName = 'Name is required';
    // }

    // if (!email) {
    //   errors.email = 'Email is required';
    // } else if (!/\S+@\S+\.\S+/.test(email)) {
    //   errors.email = 'Invalid email format';
    // }

    // if (!phone) {
    //   errors.phone = 'Phone number is required';
    // } else if (!/^\d{10}$/.test(phone)) {
    //   errors.phone = 'Invalid phone number format';
    // }

    // dispatch(customerActions.setErrors(errors));

    nextStepHandler();
  };

  return (
    <>
      <Title>02. Titular del contrato</Title>

      <FormContainer onSubmit={handleSubmit}>
        <FormColumn>
          <FormGroup>
            <Label>Documento:</Label>
            <Input type="text" name="document" value={customer?.document} onChange={handleChange} required />
          </FormGroup>
          <FormGroup>
            <Label>Primer Apellido:</Label>
            <Input
              type="text"
              name="firstLastName"
              value={customer?.firstLastName}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Fecha de Nacimiento:</Label>
            <Input
              type="text"
              name="birthDate"
              value={customer?.birthDate}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Correo electrónico:</Label>
            <Input
              type="text"
              name="email"
              value={customer?.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
        </FormColumn>
        <FormColumn>
          <FormGroup>
            <Label>Nombre:</Label>
            <Input type="text" name="name" value={customer?.firstName} onChange={handleChange} required />
          </FormGroup>
          <FormGroup>
            <Label>Segundo Apellido:</Label>
            <Input
              type="text"
              name="secondLastName"
              value={customer?.secondLastName}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Phone Number:</Label>
            <Input
              type="tel"
              name="phone"
              value={customer?.phone}
              onChange={handleChange}
              required
            />
          </FormGroup>
        </FormColumn>
      </FormContainer>

      <div style={{marginBottom: '15px'}}><small>Al continuar estas aceptando los <a href="">Términos y Condiciones de Protección de Datos</a></small></div>

      <button
        className='btn'
        type="button"
        onClick={() => handleSubmit()}>
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

const FormContainer = styled.form`
  max-width: 600px;
  display: flex;
  flex-wrap: wrap;
`;

const FormColumn = styled.div`
  flex: 1;
  padding: 16px;
`;

const FormTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #e5e5e5;
  border-radius: 0px;
`;