<script setup>
import LanguageSelectionComponent from '@/components/LanguageSelectionComponent.vue'
</script>
<script>
import { authStore } from '@/stores/authStore.js'
export default {
  name: 'MenuCompenent',
  methods: {
    Logout() {
      // TODO : Call the store to logout
    },
  },
  created() {
    this.store = authStore()
  },
  computed: {
    IsLoggedIn() {
      return this.store.IsLoggedIn
    },
  },
}
</script>

import { RouterLink } from 'vue-router'

<template>
  <div class="menu">
    <RouterLink to="/">LOGO</RouterLink>
    <nav>
      <RouterLink to="/">{{ $t('home') }}</RouterLink>
      <RouterLink to="/login">{{ $t('login') }}</RouterLink>
      <RouterLink to="/signup">{{ $t('signup') }}</RouterLink>
      <a @click.prevent="Logout">{{ $t('logout') }}</a>
      <LanguageSelectionComponent />
    </nav>
  </div>
</template>

<style scoped lang="sass">
.menu
  padding: 1rem 0 1rem 0
  display: flex
  justify-content: space-between
  a
    color: white
    text-decoration: none
  nav
    display: flex
    justify-content: space-evenly
    a
      margin: 0 1.3rem 0 1.3rem
</style>
