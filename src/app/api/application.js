import { api } from '.';
import { APIUrl } from './api-url';

export const applicationApi = api.injectEndpoints({
  endpoints: build => ({
    createOrder: build.mutation({
      query: data => ({
        url: `${APIUrl}/create-order/`,
        method: 'POST',
        body: data
      })
    }),
    auth: build.mutation({
      query: data => ({
        url: `${APIUrl}/auth/`,
        method: 'POST',
        body: data
      })
    }),
    changeStatus: build.mutation({
      query: delivery_status => ({
        url: `${APIUrl}/change-status/`,
        method: 'PATCH',
        body: { delivery_status: 'IN_PROGRESS', id: 3 }
      })
    }),
    getOrders: build.query({
      query: courier_id => ({
        url: `${APIUrl}/orders`,
        method: 'GET',
        params: courier_id
      })
    }),
    getSuppliers: build.query({
      query: supplier_type => ({
        url: `${APIUrl}/suppliers`,
        method: 'GET',
        params: supplier_type
      })
    }),
    getProducts: build.query({
      query: supplier_id => ({
        url: `${APIUrl}/products`,
        method: 'GET',
        params: { supplier_id }
      })
    }),
    getProduct: build.query({
      query: id => ({
        url: `${APIUrl}/product`,
        method: 'GET',
        params: { id }
      })
    }),
    createCustomer: build.mutation({
      query: ({ name, address, number }) => ({
        url: `${APIUrl}/create-customer`,
        method: 'POST',
        body: { name, address, number }
      })
    }),
    takeOrder: build.mutation({
      query: ({ courier_id, id }) => ({
        url: `${APIUrl}/take-order`,
        method: 'PATCH',
        body: { courier_id, id }
      })
    }),
    orderDelivered: build.mutation({
      query: ({ id }) => ({
        url: `${APIUrl}/delivered`,
        method: 'PATCH',
        body: { id }
      })
    })
  })
});

export const {
  useGetProductsQuery,
  useCreateOrderMutation,
  useAuthMutation,
  useChangeStatusMutation,
  useGetOrdersQuery,
  useGetSuppliersQuery,
  useGetProductQuery,
  useCreateCustomerMutation,
  useTakeOrderMutation,
  useOrderDeliveredMutation
} = applicationApi;
