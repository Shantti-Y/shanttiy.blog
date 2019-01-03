import client from '~/apis/client'

export const fetchTagsIndex = async (params = {}) => {
  const { data } = await client.get(`/tags`, { params: params });
  return data;
};

export const fetchTagsShow = async (tagId) => {
  const { data } = await client.get(`/tags/${tagId}`);
  return data;
};