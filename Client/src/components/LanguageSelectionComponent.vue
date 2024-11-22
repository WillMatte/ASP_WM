<template>
  <div>
    <a :class="{ selected: currentLocale === 'fr' }" @click.prevent="setLanguage('fr')">Fr</a>
    <span> | </span>
    <a :class="{ selected: currentLocale === 'en' }" @click.prevent="setLanguage('en')">En</a>
  </div>
</template>
<style scoped lang="sass">
  a
    color: white !important
    text-decoration: none
    &:hover
      cursor: pointer
    &.selected
      font-weight: bold
  span
    color: white
    margin: 0 0.5rem 0 0.5rem
    &:hover
      cursor: default

</style>
<script>
  import Cookies from "js-cookie";
  export default {
    data() {
      return {
        currentLocale: Cookies.get("locale")
      };
    },
    methods: {
      setLanguage(lang) {
        this.$i18n.locale = lang;
        Cookies.set('locale', lang, { expires: 365 });
        this.currentLocale = lang
      },
    },
  };

</script>
