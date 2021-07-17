<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="text-center">Cadastro de Amigo</h2>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
              <label for="inputNome" class="form-label">Nome</label>
              <input type="text" id="nomeAmigo" class="form-control" v-model="model.nome" placeholder="Insira seu nome">
              <small class="text-danger" v-if="errors['nome']">{{errors['nome']}}</small>
          </div>
          <div class="mb-3">
              <label for="inputFoto" class="form-label">Link da Foto</label>
              <input type="text" id="fotoAmigo" class="form-control" v-model="model.foto" placeholder="Insira o link da foto">
              <small class="text-danger" v-if="errors['foto']">{{errors['foto']}}</small>
          </div>
          <div class="mb-3">
              <label for="inputTelefone" class="form-label">Telefone</label>
              <input type="text" id="telefoneAmigo" maxlength="11" class="form-control" v-model="model.telefone" placeholder="Insira o número de telefone">
              <small class="text-danger" v-if="errors['telefone']">{{errors['telefone']}}</small>
          </div>
          <div class="mb-3">
              <label for="inputEnrabado" class="form-label">Quantas vezes você enrabou ele?</label>
              <input type="text" id="enrabadoAmigo" class="form-control" v-model="model.enrabado" placeholder="Número de vezes">
              <small class="text-danger" v-if="errors['enrabado']">{{errors['enrabado']}}</small>
          </div>
          <div class="mb-3">
              <label for="inputNome" class="form-label">Pais</label>
              <div id="v-model-select-dynamic" class="demo">
                  <select v-model="model.selected">
                      <option v-for="item in options" :value="item" v-bind:key="item">
                      {{ item }}
                      </option>
                  </select>
              </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
          <button id="btn-salvar" type="button" class="btn btn-primary" @click="save()">Cadastrar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as bootstrap from 'bootstrap'
export default {
  name: 'formulario',
  data () {
    return {
      options: [
        'Brasil',
        'Argentina',
        'Paraguai',
        'Somalia'
      ],
      model: {
        foto: '',
        nome: '',
        telefone: '',
        enrabado: '',
        selected: 'Brasil'
      },
      modalExample: null,
      errors: {}
    }
  },
  methods: {
    save () {
      this.errors = {}
      if (this.model.nome === '') {
        this.errors.nome = 'Este campo não pode ser vazio'
      }
      if (this.model.foto === '') {
        this.errors.foto = 'Este campo não pode ser vazio'
      }
      if (this.model.telefone === '') {
        this.errors.telefone = 'Este campo não pode ser vazio'
      }
      if (this.model.telefone.length <= 10) {
        this.errors.telefone = 'Este campo não pode ser menor do que 11'
      }
      if (this.model.enrabado === '') {
        this.errors.enrabado = 'Este campo não pode ser vazio'
      }

      if (Object.keys(this.errors).length > 0) {
        return
      }

      this.$emit('atualizaAmigos', this.model)
      this.limpaForm()
      // this.modalExample.hide()
    },
    limpaForm () {
      this.model = {
        foto: '',
        nome: '',
        telefone: '',
        enrabado: '',
        selected: 'Brasil'
      }
      this.errors = {}
    },
    addToModel (val) {
      this.model = val
    }
  },
  mounted () {
    this.modalExample = new bootstrap.Modal(document.getElementById('exampleModal'), {
      keyboard: false
    })
    // this.modalExample.show()
  }
}
</script>

<style>

.text-center{
    text-align: center;
}
</style>
