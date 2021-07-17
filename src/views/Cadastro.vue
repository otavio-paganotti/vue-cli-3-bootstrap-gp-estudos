<template>
  <div>
    <button type="button" class="btn btn-primary" @click="openModal = true" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
        <tr v-for="dado in amigos" v-bind:key="dado.id">
          <td><img :src="dado.foto" alt="" class="foto-do-amigo"></td>
          <td>{{ dado.nome }}</td>
          <td>{{ dado.telefone }}</td>
          <td>{{ dado.enrabado }}</td>
          <td>{{ dado.pais }}</td>
          <td>
            <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="editar(dado)">Editar</button>
            <button type="button" class="btn btn-danger" v-on:click="deleteRow(dado.id)" >Deletar</button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- <modal-novo /> -->
    <modal-formulario ref="modalFormulario" @atualizaAmigos="val => amigos.push(val)" />
  </div>
</template>

<script>
import * as bootstrap from 'bootstrap'
import modalFormulario from '../components/modal-formulario.vue'
// import modalNovo from '../components/modal-novo.vue'
export default {
  components: { modalFormulario },
  name: 'cadastro',
  data: () => ({
    // é onde a gente armazena nossas variáveis dentro do componente
    amigos: [],
    modalExample: null,
    openModal: false
  }),
  methods: {
    editar (dado) {
      this.$refs.modalFormulario.addToModel(dado)
    },
    // é onde a gente coloca as funções do componente
    // verifyForm () {
    //   const nomeAmigo = document.getElementById('nomeAmigo')
    //   const fotoAmigo = document.getElementById('fotoAmigo')
    //   const telefoneAmigo = document.getElementById('telefoneAmigo')
    //   const enrabadoAmigo = document.getElementById('enrabadoAmigo')
    //   let existError = false;
    //   if (this.nome === '') {
    //     this.setError(nomeAmigo, 'Nome não pode ser vazio');
    //     existError = true;
    //   } else {
    //     this.setSucess(nomeAmigo);
    //   }
    //   function verifyLink (foto) {
    //     const checkLink = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/;
    //     if (foto.match(checkLink)) {
    //       return true
    //     } else {
    //       return false
    //     }
    //   }
    //   if (this.foto === '') {
    //     this.setError(fotoAmigo, 'Link não pode ser vazio');
    //     existError = true;
    //   } else if (!verifyLink(this.foto)) {
    //     this.setError(fotoAmigo, 'Link inválido');
    //     existError = true;
    //   } else {
    //     this.setSucess(fotoAmigo);
    //   }
    //   function verifyPhone (telefone) {
    //     const fone = /^[0-9]+$/;
    //     const tamanhoFone = telefone.length;
    //     if (telefone.match(fone) && tamanhoFone === 11) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   }
    //   if (this.telefone === '') {
    //     this.setError(telefoneAmigo, 'O telefone não pode ser vazio');
    //     existError = true;
    //   } else if (!verifyPhone(this.telefone)) {
    //     this.setError(telefoneAmigo, 'Telefone inválido ou maior que 11');
    //     existError = true;
    //   } else {
    //     this.setSucess(telefoneAmigo);
    //   }
    //   if (this.enrabado === '') {
    //     this.setError(enrabadoAmigo, 'A quantidade de vezes não pode ser vazia');
    //     existError = true;
    //   } else {
    //     this.setSucess(enrabadoAmigo);
    //   }
    //   if (!existError) {
    //     this.addAmigo();
    //     this.nome = ''
    //     this.foto = ''
    //     this.telefone = ''
    //     this.enrabado = ''
    //   }
    // },
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
    // addAmigo () {
    //   this.amigos.push({
    //     id: this.amigos.length,
    //     foto: this.foto,
    //     nome: this.nome,
    //     telefone: this.telefone,
    //     enrabado: this.enrabado,
    //     pais: this.selected
    //   })
    // },
    deleteRow (index) {
      if (window.confirm('Tem certeza que vc deseja excluir essa linha?')) {
        this.amigos.splice(index, 1)
      }
    },
    changeValue (val) {
      console.log(val)
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
