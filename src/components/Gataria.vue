<template>
  <div class="container">
    <Gato
      nome='Gatonildo da Silva'
      imagem='../../static/imagens/gato01.jpg'/>
    <Gato
      nome='Gatiane Mello'
      imagem='../../static/imagens/gato02.jpg'/>
    <Gato
      nome='Enzo dos Santos'
      imagem='../../static/imagens/gato03.jpg'/>
    <Gato
      nome='Valentina de Sá'
      imagem='../../static/imagens/gato04.jpg'/>
  </div>
</template>

<script>
    import Gato from './Gato'

    export default {
        name: 'Gataria',
        components: { Gato }
    }
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 95vh;
        background-color: #333;
        color: #fff;
    }
</style>