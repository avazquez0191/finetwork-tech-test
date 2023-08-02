import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';

export interface IProduct {
  id:                 number;
  type:               string;
  name:               string;
  description:        string;
  prices:             Price[];
  promotions:         Promotion[];
  phonelineMegas:     number;
  phonelineMinutes:   number;
  phonelineSms:       number;
  fiberDownloadMegas: number;
  webInfo:            WebInfo;
}

interface Price {
  name:  string;
  price: number;
}

interface Promotion {
  id:          number;
  name:        string;
  displayName: string;
  description: string;
  active:      boolean;
  type:        string;
}

interface WebInfo {
  id:            number;
  slug:          string;
  menuTitle:     string;
  name:          string;
  description:   string;
  analyticsName: string;
  tag:           string;
  bullets:       string[];
  features:      string[];
}

export interface ICheckoutState {
  product: IProduct | any;
  promoId: number | null;
  taxName: string
  currentStep: number;
  tcChecked: boolean;
  loading: boolean;
  error: any;
} 

const initialState: ICheckoutState = {
    product: {},
    promoId: 1,
    taxName: 'iva',
    currentStep: 1,
    tcChecked: false,
    loading: false,
    error: null
};

// Async action to fetch product data
export const fetchProduct = createAsyncThunk('checkout/fetchProduct', async () => {
  // Simulate an API call to fetch product data
  const response = localStorage.getItem('product') ?? '';
  return JSON.parse(response);
});

// Async action to update user data
export const updateProduct = createAsyncThunk('checkout/updateProduct', async (productData: IProduct) => {
  // Simulate an API call to update product data
  localStorage.setItem('product', JSON.stringify(productData));
});

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setPromoId(state, action) {
      state.promoId = action.payload;
    },
    nextStep(state) {
      state.currentStep++;
    },
    previusStep(state) {
      state.currentStep--;
    },
    setTCChecked(state) {
      state.tcChecked = !state.tcChecked;
    },
    clearData(state) {
      state = initialState;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.product = action.payload;
        state.loading = false;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProduct.fulfilled, (state, action: any) => {
        state.product = action.payload;
        state.loading = false;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const checkoutActions = checkoutSlice.actions;

export default checkoutSlice.reducer;