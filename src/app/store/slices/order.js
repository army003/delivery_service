import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
  orderMaked: false,
  orderDetail: {
    name: null,
    quantity: 0,
    id: null
  },
  customerInfo: {
    full_name: null,
    mobile_number: null,
    address: null
  },
  deliveryInfo: {
    customer_id: null,
    product_id: null,
    delivery_date: null,
    delivery_time: null,
    quantity: null,
    price_unit: null,
    supplier_id: null,
    depature_date: null,
    arrival_date: null,
    delivery_status: null
  }
};

const baseSelector = state => state.order;

export const getOrderMaked = createSelector([baseSelector], state => state.orderMaked);
export const getOrderDetail = createSelector([baseSelector], state => state.orderDetail);
export const getCustomerDetail = createSelector([baseSelector], state => state.customerInfo);
export const getDeliveryDetail = createSelector([baseSelector], state => state.deliveryInfo);

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrder: (state, { payload }) => {
      state.orderMaked = payload.order_maked;
    },
    setOrderDetail: (state, { payload }) => {
      state.orderDetail = payload;
    },
    setCustomerInfo: (state, { payload }) => {
      state.customerInfo = payload;
    },
    setDelveryInfo: (state, { payload }) => {
      state.deliveryInfo = payload;
    }
  }
});

export const { setOrder, setOrderDetail, setCustomerInfo, setDelveryInfo } = orderSlice.actions;

export default orderSlice.reducer;