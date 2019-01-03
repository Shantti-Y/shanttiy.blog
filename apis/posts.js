import client from '~/apis/client'

export const fetchPostsIndex = async (params = {}) => {
  const { headers, data } = await client.get(`/posts`, { params: params });
  return { total: parseInt(headers['x-wp-total']), posts: data };
};

export const fetchPostsShow = async (postId) => {
  const { data } = await client.get(`/posts/${postId}`);
  return data;
};