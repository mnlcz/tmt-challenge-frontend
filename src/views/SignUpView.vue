<template>
  <div class='container container-form'>
    <form @submit.prevent='register'>
      <h2 class='mb-3'>Registrarse</h2>
      <div class='input'>
        <label for='username'>Username</label>
        <input
          v-model='username'
          class='form-control'
          type='text'
          id='username'
        />
      </div>
      <div class='input'>
        <label for='email'>Email</label>
        <input
          v-model='email'
          class='form-control'
          type='text'
          id='email'
        />
      </div>
      <div class='input'>
        <label for='password'>Contraseña</label>
        <input
          v-model='password'
          class='form-control'
          type='password'
          id='password'
        />
      </div>
      <div class='alternative-option mt-4'>
        ¿Ya tenés una cuenta? <span @click='moveToLogin'>Ingresar</span>
      </div>
      <button type='submit' class='mt-4 btn-pers' id='login_button'>
        Ingresar
      </button>
      <div
        class='alert alert-warning alert-dismissible fade show mt-5'
        role='alert'
        v-if='errorMessage'
        id='alert_1'
      >
        {{ errorMessage }}
        <button
          type='button'
          class='btn-close'
          data-bs-dismiss='alert'
          aria-label='Close'
          @click='dismissAlert'
        ></button>
      </div>
    </form>
  </div>
</template>

<script>
import { signup } from '../services/api'

export default {
  data() {
    return {
      username: '',
      password: '',
      email: '',
      errorMessage: ''
    }
  },
  methods: {
    register() {
      if (this.username !== '' && this.password !== '' && this.email !== '') {
        // Clear error message
        this.errorMessage = ''

        // Call the API method for login
        const registerData = {
          username: this.username,
          password: this.password,
          email: this.email
        }

        signup(registerData)
          // eslint-disable-next-line no-unused-vars
          .then(response => {
            // Reset form fields
            this.username = ''
            this.password = ''
            this.email = ''

            this.$router.push('/signin');
          })
          .catch(error => {
            this.errorMessage = error.message
            this.showAlert()
          })
      } else {
        this.errorMessage = 'Ingresa tus datos'
        this.showAlert()
      }
    },
    moveToLogin() {
      this.$router.push('/signin')
    },
    showAlert() {
      const alert = document.getElementById('alert_1')
      alert.classList.remove('d-none')
    },
    dismissAlert() {
      const alert = document.getElementById('alert_1')
      alert.classList.add('d-none')
    }
  }
}
</script>