import { api } from '.';
import { APIUrl } from './api-url';

const applicationApi = api.injectEndpoints({
  endpoints: build => ({
    createOrder: build.mutation({
      query: data => ({
        url: `${APIUrl}/create-order/`,
        method: 'POST',
        body: data
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
  useCreateCustomerMutation
} = applicationApi;
