<template>
  <div class='container container-form'>
    <form @submit.prevent='login'>
      <h2 class='mb-3'>Iniciar sesión</h2>
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
        <label for='password'>Contraseña</label>
        <input
          v-model='password'
          class='form-control'
          type='password'
          id='password'
        />
      </div>
      <div class='alternative-option mt-4'>
        ¿No estás registrado? <span @click='moveToRegister'>Registrarse</span>
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
import { signin } from '../services/api'
import Cookies from 'js-cookie'

export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    login() {
      if (this.username !== '' && this.password !== '') {
        // Clear error message
        this.errorMessage = ''

        // Call the API method for login
        const loginData = {
          username: this.username,
          password: this.password
        }

        signin(loginData)
          // eslint-disable-next-line no-unused-vars
          .then(response => {
            Cookies.set('user', this.username)
            this.username = ''
            this.password = ''
            this.$router.push('/')
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
    moveToRegister() {
      this.$router.push('/signup')
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