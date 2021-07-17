<template>
 <div>
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

<modal-formulario ref="modalFormulario" @atualizaAmigos="val => amigos.push(val)"/>

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
            <td>{{ dado.nome }}</td>
            <td>{{ dado.foto }}</td>
            <td>{{ dado.telefone }}</td>
            <td>{{ dado.vezes }}</td>
            <td></td>
            <td>
              <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="editar(dado)">Editar</button>
              <!-- <button type="button" class="btn btn-danger" v-on:click="deleteRow(dado.id)" >Deletar</button> -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
 </div>
</template>

<script>
import modalFormulario from '../components/modal-formulario.vue'

export default {
  components: { modalFormulario },
  name: 'cadastro',

  data: () => ({
    // form: {
    //   nome: 'Anderson',
    //   Foto: 'Fototop',
    //   Telefone: '67996057121',
    //   Vezes: '2'
    // }
  }),

  methods: {
    editar (dado) {
      this.$refs.modalFormulario.addToModel(dado)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
