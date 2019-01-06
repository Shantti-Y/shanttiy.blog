export const state = () => ({
});

export const actions = {
  async nuxtServerInit({ dispatch }) {
    dispatch('categories/initializeCategoryList');
    dispatch('tags/initializeTagList');
  }
}