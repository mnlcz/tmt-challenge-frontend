<template>
  <div class='container container-form'>
    <form @submit.prevent='login'>
      <h2 class='mb-3'>Iniciar sesión</h2>
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
          placeholder='clave123'
        />
      </div>
      <div class='alternative-option mt-4'>
        ¿No estás registrado? <span @click='moveToRegister'>Registrarse</span>
      </div>
      <button type='submit' class='mt-4 btn-pers' id='login_button'>
        Ingresar
      </button>
      <div
        class='alert alert-warning alert-dismissible fade show mt-5 d-none'
        role='alert'
        id='alert_1'
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
      password: ''
    }
  },
  methods: {
    login() {

    }
  }
}
</script>