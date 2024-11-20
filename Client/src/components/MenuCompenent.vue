<script setup>

</script>

import { RouterLink } from 'vue-router'

<template>
  <div class="menu">
    <RouterLink to="/">LOGO</RouterLink>
    <nav>
      <RouterLink to="/">{{ $t('home') }}</RouterLink>
      <RouterLink to="/login">{{ $t('login') }}</RouterLink>
      <RouterLink to="/signup">{{ $t('signup') }}</RouterLink>
      <RouterLink to="/">{{ $t('logout') }}</RouterLink>
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
    a
      margin: 0 1.3rem 0 1.3rem
</style>
