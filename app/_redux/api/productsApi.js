import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/products" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "",
      transformResponse: (response) => response.products,
    }),
    getProductById: builder.query({
      query: (id) => `/${id}`,
    }),
    searchProducts: builder.query({
      query: ({ searchTerm, limit = 5 }) =>
        `/search?q=${searchTerm}&limit=${limit}`,
    }),
    addNewProduct: builder.mutation({
      query: (newProduct) => ({
        url: "/add",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: newProduct,
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useSearchProductsQuery,
  useAddNewProductMutation,
} = productsApi;

export default productsApi;
