<template>
  <nav class='navbar navbar-dark bg-dark'>
    <div class='container-fluid'>
      <router-link to='/' class='navbar-brand'>TMT Challenge</router-link>
      <button class='navbar-toggler collapsed' type='button' data-bs-toggle='collapse'
              data-bs-target='#navbarMenu' aria-controls='navbarListado' aria-expanded='false'
              aria-label='Toggle navigation'>
        <span class='navbar-toggler-icon'></span>
      </button>

      <div class='navbar-collapse collapse' id='navbarMenu'>
        <ul v-if='!logueado' class='navbar-nav me-auto mb-2'>
          <router-link to='/signin' class='nav-link active' aria-current='page'>Iniciar Sesión</router-link>
          <router-link to='/signup' class='nav-link active' aria-current='page'>Registrarse</router-link>
        </ul>
        <ul v-else class='navbar-nav me-auto mb-2'>
          <router-link to='/newpost' class='nav-link active' aria-current='page'>Nuevo Post</router-link>
          <router-link to='/profile' class='nav-link active' aria-current='page'>Mi Perfil</router-link>
          <router-link to='/' class='nav-link active' aria-current='page' @click='updateLogueado'>Cerrar Sesión
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['logueado'],
  methods: {
    updateLogueado() {
      this.$emit('update:logueado', !this.logueado)
    }
  }
}
</script>

<style>
.navbar {
    margin-bottom: 40px;
}
</style>