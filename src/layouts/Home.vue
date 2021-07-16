<template>
  <div>
    <nav class="navbar bg-purple">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">Cadastro de amigos</span>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'layout-default'
}
</script>

<style>
.bg-purple{
  background-color: blueviolet;
  color: white;
  text-decoration: none;
}
a{
  text-decoration: none;
  color: white;
}
</style>
