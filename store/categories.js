import { fetchCategoriesIndex } from '@/apis/categories';

export const state = () => ({
  dataList: [],
  data: {}
});

export const getters = {
  findCategory: state => categoryId => {
    const category = state.dataList.find(category => {
      return category.id == categoryId
    })
    return category;
  }
};

export const actions = {
  async initializeCategoryList({ commit }) {
    const categories = await fetchCategoriesIndex();
    commit('initializeDataList', categories);
  }
};

export const mutations = {
  initializeDataList(state, data) {
    state.dataList = data
  },
  initializeData(state, data) {
    state.data = data
  }
};

