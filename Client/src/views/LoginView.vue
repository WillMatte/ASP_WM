<script setup>
import LoginFormComponent from '@/components/LoginFormComponent.vue'
</script>

<template>
  <section class="login-section">
    <div>
      <h1>{{ $t('login') }}</h1>
      <LoginFormComponent />
    </div>
  </section>
</template>

<style scoped lang="sass">
.login-section
  display: flex
  justify-content: center
  margin: 4rem 0 4rem 0
h1
  text-align: center
</style>
