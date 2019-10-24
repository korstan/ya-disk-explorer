import axios from 'axios';

export default {
  namespaced: true,
  state: {
    currentPath: [],
    currentFiles: [],
  },
  getters: {
    getCurrentPathString: state => {
      return state.currentPath.join('/');
    },
    getDirsArray: state => {
      return [
        {
          name: 'root',
          path: '/disk',
        },
      ].concat(
        state.currentPath.map((dir, i) => {
          return {
            name: dir,
            path:
              '/disk/' +
              state.currentPath.reduce((sum, subdir, j) => {
                if (j <= i) return sum + '/' + subdir;
                else return sum;
              }),
          };
        }),
      );
    },
  },
  actions: {
    FETCH_CURRENT_FILES: ({ commit, getters }) => {
      const currentPath = getters.getCurrentPathString;
      axios
        .get(
          `https://cloud-api.yandex.net:443/v1/disk/resources?path=/${getters.getCurrentPathString}`,
        )
        .then(res => {
          let files = res.data._embedded.items;
          if (currentPath !== '') {
            files.unshift({ name: '..', type: 'dir', isUp: true });
          }
          commit('SET_CURRENT_FILES', files);
        })
        .catch(err => {
          throw err;
        });
    },
    INIT_CURRENT_PATH: ({ commit }, path) => {
      let currentPath = path
        .substr(1)
        .split('/')
        .slice(1);
      if (currentPath.length == 1 && currentPath[0] === '') return;
      else {
        commit('SET_CURRENT_PATH', currentPath);
      }
    },
  },
  mutations: {
    SET_CURRENT_PATH: (state, path) => (state.currentPath = path),
    SET_CURRENT_FILES: (state, files) => (state.currentFiles = files),
  },
};
