<script setup>

import MenuCompenent from "@/components/MenuCompenent.vue";
</script>

<template>
  <header class="bg-primary">
    <div class="container-lg">
      <MenuCompenent/>
    </div>
  </header>
  <main class="container-lg">
    <RouterView/>
  </main>
</template>

<style scoped lang="sass">

</style>
