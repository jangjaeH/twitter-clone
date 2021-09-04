import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  state() {
    return {
      user: null,
    };
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user;
    },
    SET_BACKGROUND_IMAGE: (state, image) => {
      state.user.background_image_url = image;
    },
    SET_PROFILE_IMAGE: (state, image) => {
      state.user.profile_image_url = image;
    },
    SET_FOLLOW: (state, uid) => {
      state.user.followings.push(uid);
    },
    SET_UN_FOLLOW: (state, uid) => {
      state.user.followings = state.user.followings.filter((u) => u !== uid);
    },
    SET_LOCATION: (state, location) => {
      state.user.location = location;
    },
    SET_INTRODUCEMYSELF: (state, introduceMyself) => {
      state.user.introduceMyself = introduceMyself;
    },
    SET_SITE: (state, site) => {
      state.user.site = site;
    },
  },
  plugins: [createPersistedState()],
});

export default store;
