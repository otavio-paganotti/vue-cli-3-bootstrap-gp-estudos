<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
      <ul class="navbar-nav ">
        <li class="nav-item ">
          <a class="nav-link "  href="#">Veja sua tabela de Amigo</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#">Cadastre seu Amigo</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div class="container">
  <div class="row justify-content-center">
    <div class="col-12">
      <table class="table table-hover ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Foto</th>
            <th scope="col">Telefone</th>
            <th scope="col">Vezes</th>
            <th scope="col">País</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Kardek</td>
            <td>Foto</td>
            <td>67996057121</td>
            <td>3</td>
            <td>Brasil</td>
            <td>Editar</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>José</td>
            <td>FotoJosé</td>
            <td>67996786512</td>
            <td>7</td>
            <td>Argentina</td>
            <td>Excluir</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'cadastro',

  data: () => ({
    x: 0,
    lista: []
  }),

  methods: {
    soma () {
      console.log('oi')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
