<template>
  <div class='container container-form'>
    <form @submit.prevent='postear'>
      <h2 class='mb-3'>Editar post</h2>
      <div class='input'>
        <label for='content'>Contenido</label>
        <textarea
          v-model='contenido'
          rows='5'
          class='form-control'
          type='text'
          id='content'
          placeholder='Escribí acá tu posteo.'
        />
      </div>
      <button type='submit' class='mt-4 btn-pers' id='post_button'>
        Postear
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
import { patch } from '@/services/api'

export default {
  data() {
    return {
      contenido: '',
      errorMessage: ''
    }
  },
  methods: {
    postear() {
      if (this.contenido !== '') {
        this.errorMessage = ''
        const id = this.$route.params.id
        if (!id) {
          throw new Error('Post invalido')
        } else {
          const data = {
            content: this.contenido
          }
          try {
            patch(id, data)
            this.$router.push('/')
          } catch (err) {
            this.errorMessage = err.message
            this.showAlert()
          }
        }
      } else {
        this.errorMessage = 'Completa tu posteo'
        this.showAlert()
      }
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
