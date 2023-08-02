import { createSlice } from '@reduxjs/toolkit';

export interface ICustomer {
    document: string;
    firstName: string;
    firstLastName: string;
    secondLastName: string;
    birthDate: string;
    phone: string,
    email: string
}

export interface ICustomerState {
    customer: ICustomer | null,
    loading: boolean,
    error: {} | null
}

const initialState: ICustomerState = {
    customer: null,
    loading: false,
    error: null,
};

const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        setCustomer: (state, action) => {
            state.customer = action.payload;
        }
    },
});

export const customerActions = customerSlice.actions;

export default customerSlice.reducer;