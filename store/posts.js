import { fetchPostsIndex, fetchPostsShow } from '@/apis/posts';

export const state = () => ({
  dataList: [],
  data: {},
  total: 0
});

export const getters = {
};

export const actions = {
  async initializePostList({ commit }, params){
    const { total, posts } = await fetchPostsIndex(params);
    commit('initializeDataList', posts);
    commit('initializeTotal', total);
  },
  async initializePost({ commit }, postId){
    const post = await fetchPostsShow(postId);
    commit('initializeData', post);
  }
};

export const mutations = {
  initializeDataList(state, data) {
    state.dataList = data
  },
  initializeData(state, data) {
    state.data = data
  },
  initializeTotal(state, data) {
    state.total = data
  }
};

