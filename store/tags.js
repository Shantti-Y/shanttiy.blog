import { fetchTagsIndex } from '@/apis/tags';

export const state = () => ({
  allDataList: [],
  dataList: []
});

export const getters = {
  findTagList: state => inputTagIds => {
    const tags = state.allDataList.filter(stateTag => {
      return inputTagIds.find(inputTagId => inputTagId === stateTag.id );
    })
    return tags
  }
};

export const actions = {
  async initializeTagList({ commit }) {
    const tags = await fetchTagsIndex();
    commit('initializeAllDataList', tags);
  }
};

export const mutations = {
  initializeAllDataList(state, data){
    state.allDataList = data;
  },
  initializeDataList(state, data){
    state.dataList = data;
  }
};

