<template>
  <div>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Cadastrar amigo
    </button>
    <table class="table table-striped">
      <thead class="text-center">
        <tr>
          <th scope="col">Foto</th>
          <th scope="col">Nome</th>
          <th scope="col">Telefone</th>
          <th scope="col">Enrabado</th>
          <th scope="col">Pais</th>
          <th scope="col">Opções</th>
        </tr>
      </thead>
      <tbody class="text-center align-middle">
        <tr v-for="dado in amigos" v-bind:key="dado">
          <td><img :src="dado.foto" alt="" class="foto-do-amigo"></td>
          <td>{{ dado.nome }}</td>
          <td>{{ dado.telefone }}</td>
          <td>{{ dado.enrabado }}</td>
          <td>{{ dado.pais }}</td>
          <td>
            <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button>
            <button type="button" class="btn btn-danger" v-on:click="deleteRow(dado.id)" >Deletar</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="text-center">Cadastro de Amigo</h2>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                  <label for="inputNome" class="form-label">Nome</label>
                  <input type="text" id="nomeAmigo" class="form-control" v-model.lazy="nome" placeholder="Insira seu nome">
                  <small></small>
              </div>
              <div class="mb-3">
                  <label for="inputFoto" class="form-label">Link da Foto</label>
                  <input type="text" id="fotoAmigo" class="form-control" v-model.lazy="foto" placeholder="Insira o link da foto">
                  <small></small>
              </div>
              <div class="mb-3">
                  <label for="inputTelefone" class="form-label">Telefone</label>
                  <input type="text" id="telefoneAmigo" maxlength="11" class="form-control" v-model.lazy="telefone" placeholder="Insira o número de telefone">
                  <small></small>
              </div>
              <div class="mb-3">
                  <label for="inputEnrabado" class="form-label">Quantas vezes você enrabou ele?</label>
                  <input type="text" id="enrabadoAmigo" class="form-control" v-model.lazy="enrabado" placeholder="Número de vezes">
                  <small></small>
              </div>
              <div class="mb-3">
                  <label for="inputNome" class="form-label">Pais</label>
                  <div id="v-model-select-dynamic" class="demo">
                      <select v-model="selected">
                          <option v-for="item in options" :value="item" v-bind:key="item">
                          {{ item }}
                          </option>
                      </select>
                  </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            <button id="btn-salvar" type="button" class="btn btn-primary" @click="verifyForm()">Cadastrar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cadastro',
  data: () => ({
    // é onde a gente armazena nossas variáveis dentro do componente
    selected: 'Brasil',
    options: [
      'Brasil',
      'Argentina',
      'Paraguai',
      'Somalia'
    ],
    foto: '',
    nome: '',
    telefone: '',
    enrabado: '',
    amigos: []
  }),
  methods: {
    // é onde a gente coloca as funções do componente
    verifyForm () {
      const nomeAmigo = document.getElementById('nomeAmigo')
      const fotoAmigo = document.getElementById('fotoAmigo')
      const telefoneAmigo = document.getElementById('telefoneAmigo')
      const enrabadoAmigo = document.getElementById('enrabadoAmigo')
      let existError = false;
      if (this.nome === '') {
        this.setError(nomeAmigo, 'Nome não pode ser vazio');
        existError = true;
      } else {
        this.setSucess(nomeAmigo);
      }
      function verifyLink (foto) {
        const checkLink = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/;
        if (foto.match(checkLink)) {
          return true
        } else {
          return false
        }
      }
      if (this.foto === '') {
        this.setError(fotoAmigo, 'Link não pode ser vazio');
        existError = true;
      } else if (!verifyLink(this.foto)) {
        this.setError(fotoAmigo, 'Link inválido');
        existError = true;
      } else {
        this.setSucess(fotoAmigo);
      }
      function verifyPhone (telefone) {
        const fone = /^[0-9]+$/;
        const tamanhoFone = telefone.length;
        if (telefone.match(fone) && tamanhoFone === 11) {
          return true;
        } else {
          return false;
        }
      }
      if (this.telefone === '') {
        this.setError(telefoneAmigo, 'O telefone não pode ser vazio');
        existError = true;
      } else if (!verifyPhone(this.telefone)) {
        this.setError(telefoneAmigo, 'Telefone inválido ou maior que 11');
        existError = true;
      } else {
        this.setSucess(telefoneAmigo);
      }
      if (this.enrabado === '') {
        this.setError(enrabadoAmigo, 'A quantidade de vezes não pode ser vazia');
        existError = true;
      } else {
        this.setSucess(enrabadoAmigo);
      }
      if (!existError) {
        this.addAmigo();
        this.nome = ''
        this.foto = ''
        this.telefone = ''
        this.enrabado = ''
      }
    },
    setError (input, message) {
      const formControl = input.parentElement;
      const small = formControl.querySelector('small');

      small.innerText = message;
    },
    setSucess (input) {
      const formControl = input.parentElement;
      const small = formControl.querySelector('small');

      small.style.display = 'none';
    },
    addAmigo () {
      this.amigos.push({
        id: this.amigos.length,
        foto: this.foto,
        nome: this.nome,
        telefone: this.telefone,
        enrabado: this.enrabado,
        pais: this.selected
      })
    },
    deleteRow (index) {
      this.amigos.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
small{
  color: red;
}
img{
  width: 60px;
  height: 60px;
  border-radius: 50%
}
</style>
