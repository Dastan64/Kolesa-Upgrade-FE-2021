import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: 'Dastan',
    userInfo: {
      name: '',
      avatarUrl: '',
      score: '',
    },
    clothes: [],
    accessories: [],
  },
  mutations: {
    updateClothes(state, response) {
      state.clothes = response;
    },
    updateAccessories(state, response) {
      state.accessories = response;
    },
    updateUserInfo(state, response) {
      state.userInfo = response;
    },
    updateUserBalance(state, price) {
      state.userInfo.score -= price;
    },
  },
  actions: {
    fetchUserInfo({ commit }) {
      fetch('https://api.json-generator.com/templates/7ZW3y5GAuIge/data', {
        headers: {
          Authorization: 'Bearer rhhrmjvdvcv0ka4e6ouao9a1gj42fbjim5bcu60f',
        },
      })
        .then((response) => {
          if (!response.ok) {
            console.log(response.status);
          }
          return response.json();
        })
        .then((data) => {
          commit('updateUserInfo', data);
        })
        .catch((err) => {
          console.log('Fetch Error', err);
        });
    },
    fetchClothes({ commit }) {
      fetch('https://api.json-generator.com/templates/-_RLsEGjof6i/data', {
        headers: {
          Authorization: 'Bearer rhhrmjvdvcv0ka4e6ouao9a1gj42fbjim5bcu60f',
        },
      })
        .then((response) => {
          if (!response.ok) {
            console.log(response.status);
          }
          return response.json();
        })
        .then((data) => {
          commit('updateClothes', data);
        })
        .catch((err) => {
          console.log('Fetch Error', err);
        });
    },
    fetchAccessories({ commit }) {
      fetch('https://api.json-generator.com/templates/q3OPxRyEcPvP/data', {
        headers: {
          Authorization: 'Bearer rhhrmjvdvcv0ka4e6ouao9a1gj42fbjim5bcu60f',
        },
      })
        .then((response) => {
          if (!response.ok) {
            console.log(response.status);
          }
          return response.json();
        })
        .then((data) => {
          commit('updateAccessories', data);
        })
        .catch((err) => {
          console.log('Fetch Error', err);
        });
    },
  },
});
