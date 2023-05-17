<template>
  <div class='container container-form'>
    <form @submit.prevent='register'>
      <h2 class='mb-3'>Registrarse</h2>
      <div class='input'>
        <label for='user'>Usuario</label>
        <input
          class='form-control'
          type='text'
          name='user'
          placeholder='user123'
        />
      </div>
      <div class='input'>
        <label for='email'>Email</label>
        <input
          class='form-control'
          type='text'
          name='email'
          placeholder='email@adress.com'
        />
      </div>
      <div class='input'>
        <label for='password'>Contraseña</label>
        <input
          class='form-control'
          type='password'
          name='password'
          placeholder='password123'
        />
      </div>

      <div class='alternative-option mt-4'>
        ¿Ya estás registrado? <span @click='moveToLogin'>Ingresar</span>
      </div>

      <button type='submit' id='register_button' class='mt-4 btn-pers'>
        Registrarse
      </button>
      <div
        class='alert alert-warning alert-dismissible fade show mt-5 d-none'
        role='alert'
        id='alert_2'
      >
        <button
          type='button'
          class='btn-close'
          data-bs-dismiss='alert'
          aria-label='Close'
        ></button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '123456'
    }
  },
  methods: {
    register() {
    }
  }
}
</script>