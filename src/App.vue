<template>
  <nav-bar></nav-bar>
  <router-view />
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: { NavBar },
}
</script>

<style>

.background {
    width: 100vw;
    height: 100vh;
    position: absolute;
    background: rgb(250, 250, 250);
}

.container-form {
    width: 400px;
    max-width: 95%;
    margin-top: 6%;
}

.input {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
}

.input > label {
    text-align: start;
}

.input > input {
    margin-top: 6px;
    height: 38px !important;
}

/* From uiverse.io */
.btn-pers {
    position: relative;
    left: 50%;
    padding: 1em 2.5em;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 700;
    color: #000;
    background-color: #fff;
    border: none;
    border-radius: 45px;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    transform: translateX(-50%);
}

.btn-pers:hover {
    background-color: #198754;
    box-shadow: 0 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translate(-50%, -7px);
}

.btn-pers:active {
    transform: translate(-50%, -1px);
}

/*  */

.alternative-option {
    text-align: center;
}

.alternative-option > span {
    color: #0d6efd;
    cursor: pointer;
}

#sign_out {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
}
</style>