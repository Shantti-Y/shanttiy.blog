import client from '~/apis/client'

export const fetchCategoriesIndex = async (params = {}) => {
  const { data } = await client.get(`/categories`, { params: params });
  return data;
};

export const fetchCategoriesShow = async (categoryId) => {
  const { data } = await client.get(`/categories/${categoryId}`);
  return data;
};