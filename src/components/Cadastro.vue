<template>
  <div class="container">
      <div class="row">
        <form>
            <h2 class="text-center">Cadastro de Amigo</h2>
            <div class="mb-3">
                <label for="inputNome" class="form-label">Nome</label>
                <input type="text" class="form-control" placeholder="Insira seu nome">
            </div>
            <div class="mb-3">
                <label for="inputFoto" class="form-label">Link da Foto</label>
                <input type="text" class="form-control" placeholder="Insira o link da foto">
            </div>
            <div class="mb-3">
                <label for="inputTelefone" class="form-label">Telefone</label>
                <input type="text" maxlength="11" class="form-control" placeholder="Insira o número de telefone">
            </div>
            <div class="mb-3">
                <label for="inputEnrabado" class="form-label">Quantas vezes você enrabou ele?</label>
                <input type="text" class="form-control" placeholder="Número de vezes">
            </div>
            <div class="mb-3">
                <label for="inputNome" class="form-label">Pais</label>
                <div id="v-model-select-dynamic" class="demo">
                    <select v-model="selected">
                        <option v-for="option in options" :value="option.value" v-bind:key="option">
                        {{ option.text }}
                        </option>
                    </select>
                </div>
            </div>
            <button class="btn btn-primary">CADASTRAR</button>
        </form>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Cadastro',
  data () {
    return {
      selected: 'A',
      options: [
        { text: 'Brasil', value: 'A' },
        { text: 'Argentina', value: 'B' },
        { text: 'Paraguai', value: 'C' },
        { text: 'Somalia', value: 'D' }
      ]
    }
  }
}
</script>

<style>
.text-center{
    text-align: center;
}
</style>
