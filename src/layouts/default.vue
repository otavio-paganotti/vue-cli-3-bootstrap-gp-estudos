<template>
  <div>
    <div id="nav">
      <router-link to="/cadastro">Cadastro</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'layout-default'
}
</script>

<style lang="scss" scoped>

</style>
