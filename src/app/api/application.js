import { api } from '.';
import { APIUrl } from './api-url';

const applicationApi = api.injectEndpoints({
  endpoints: build => ({
    getData: build.query({
      query: (product_type = 'food') => ({
        url: `${APIUrl}/products/${product_type}`,
        method: 'GET'
      })
    }),
    createOrder: build.mutation({
      query: () => ({
        url: `${APIUrl}/create-order/`,
        method: 'POST',
        body: {
          id: 12,
          customer_id: 1,
          product_id: 1,
          delivery_date: '2023-04-20',
          delivery_time: '10:00:00',
          quantity: 10,
          price_unit: 9.99,
          supplier_id: 1,
          departure_date: '2023-04-19',
          arrival_date: '2023-04-20'
        }
      })
    }),
    auth: build.mutation({
      query: () => ({
        url: `${APIUrl}/auth/`,
        method: 'POST',
        body: { phone_number: '+77082994296', password: '1111' }
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
      query: () => ({
        url: `${APIUrl}/orders`,
        method: 'GET'
      })
    })
  })
});

export const { useGetDataQuery, useCreateOrderMutation, useAuthMutation, useChangeStatusMutation, useGetOrdersQuery } =
  applicationApi;
