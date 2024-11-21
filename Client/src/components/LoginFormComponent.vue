<template>
  <form novalidate @submit.prevent="ValidateForm">
    <div>
      <div class="inputgroup">
        <label class="form-label">{{ $t('email') }}</label>
        <input
          class="form-control"
          type="text"
          id="email"
          v-model.trim="email"
          @blur="ValidateEmail"
        />
      </div>
    </div>
    <div>
      <div class="inputgroup">
        <label class="form-label">{{ $t('password') }}</label>
        <input
          class="form-control"
          type="text"
          id="password"
          v-model.trim="password"
          @blur="ValidatePassword"
        />
      </div>
      <div class="error">
        <span v-if="emptyEmailError">{{ $t('emptyEmailError') }}</span>
        <span v-else-if="emptyPasswordError">{{ $t('emptyPasswordError') }}</span>
        <span v-else-if="loginError">{{ $t('loginError') }}</span>
        <span v-else-if="serverError">{{ $t('serverError') }}</span>
      </div>
    </div>
    <div class="btn-submit">
      <input type="submit" class="btn btn-primary" :value="$t('loginAction')" />
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      emptyEmailError: false,
      emptyPasswordError: false,
      loginError: false,
      serverError: false,
    }
  },
  computed: {},
  created() {},
  methods: {
    async SubmitForm() {
      // TODO : Login logic here, most likely call the store...
      // TODO : Don't forget to set the error sent by the server
      console.log('Request get sent here!')
    },
    ValidateEmail() {
      if (this.email.length === 0) this.emptyEmailError = true
    },
    ValidatePassword() {
      if (this.password.length === 0) this.emptyPasswordError = true
    },
    ValidateForm() {
      this.ResetErrors()
      this.ValidateEmail()
      this.ValidatePassword()
      if (!this.emptyEmailError && !this.emptyPasswordError) this.SubmitForm()
    },
    ResetErrors() {
      this.emptyEmailError = false
      this.emptyPasswordError = false
      this.loginError = false
      this.serverError = false
    },
  },
}
</script>

<style scoped lang="sass">
@use "@/assets/styles/forms/FormStyles"
</style>
