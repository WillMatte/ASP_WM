import { defineStore } from 'pinia'

export const authStore = defineStore({
  id: 'authStore',
  state: () => ({
    token: localStorage.getItem('jwt') || null,
  }),
  getters: {
    GetUserId() {
      // TODO : Return the id of the user stored in the jwt, will be used in a helper file
    },
    IsLoggedIn() {
      // TODO : Return true or false depending on the state
    },
  },
  actions: {
    async Login() {
      // TODO : Call the API to get a jwt and set it in local storage
    },
    Logout() {
      // TODO : Remove the jwt from the storage, might need to call the api
    },
  },
})
