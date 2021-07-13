<template>
  <div>
    <h1>CADASTRO</h1>
    <h3>{{ x }}</h3>
    <h3>{{ novoX }}</h3>
    <button class="btn btn-success" v-on:click="soma()">
      Clique aqui
    </button>
  </div>
</template>

<script>
export default {
  name: 'cadastro',
  data: () => ({
    // é onde a gente armazena nossas variáveis dentro do componente
    x: 0,
    y: 1,
    lista: []
  }),
  methods: {
    // é onde a gente coloca as funções do componente
    soma () {
      this.x += 5
    }
  },
  mounted () {
    this.soma()
    // executa métodos/funções assim que a página é terminada de carregar
  },
  computed: {
    novoX () {
      return this.x * 10
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
