import { authStore } from '@/stores/authStore.js'

export async function GetUserInfo() {
  if (!authStore().IsLoggedIn()) {
    // TODO : Send back an error
  }
  // TODO : Call the API and get the user information
}

export async function GetUserRole() {
  if (!authStore().IsLoggedIn()) {
    // TODO : Send back an error
  }
  // TODO : Call the API and get the role of the user
}
