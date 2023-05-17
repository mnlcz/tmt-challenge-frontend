<template>
  <div class='container container-form'>
    <form>
      <h2 class='mb-3'>Nuevo post</h2>
      <div class='input'>
        <label for='title'>Titulo</label>
        <input
          class='form-control'
          type='text'
          name='titulo'
          placeholder='Acá va el título.'
        />
      </div>
      <div class='input'>
        <label for='content'>Contenido</label>
        <textarea
          rows='5'
          class='form-control'
          type='text'
          name='content'
          placeholder='Escribí acá tu posteo.'
        />
      </div>
      <button type='submit' class='mt-4 btn-pers' id='login_button'>
        Postear
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

<script setup>
</script>
