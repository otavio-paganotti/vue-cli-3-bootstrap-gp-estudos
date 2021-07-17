<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-6">
        <div class="mb-12">
          <label for="formGroupExampleInput" class="form-label">Nome</label>
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Digite seu nome...">
          {{ modal.nome }}
        </div>
        <div class="mb-12">
          <label for="formGroupExampleInput2" class="form-label">Foto</label>
          <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="URL da foto">
        </div>
        <div class="mb-12">
          <label for="formGroupExampleInput2" class="form-label">Telefone</label>
          <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Telfone">
        </div>
        <div class="mb-12">
          <label for="formGroupExampleInput2" class="form-label">Vezes</label>
          <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder">
        </div>
        <div>
          <label for="formGroupExampleInput2" class="form-label">Selecione um Pais</label>
          <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option value="1">Brasil</option>
            <option value="2">Argentina</option>
            <option value="3">Peru</option>
            <option value="4">Colombia</option>
          </select>
      </div>
      <div>
        <button class="btn btn-primary" type="submit">Button</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'formulario',
  data: () => ({
    modal: {
      nome: 'não sei'
    }
  }),
  methods: {
    save () {
      this.$emit('atualizaAmigos', this.model)
    }
  }
}
</script>

<style>

</style>
