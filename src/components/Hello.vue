<template>
  <section>
    <img src='../../static/imagens/gato05.jpg'>
    <h1>{{ usuario }}</h1>
    <p>{{ sobre }}</p>
  </section>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      usuario: 'gatuno',
      sobre: 'ronronador profissional'
    }
  }
}
</script>

<style scoped>
section {
  background-color: #fdfdfd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2em;
  height: 95vh;
  background-color: #333;
  color: #fff;
}

img {
  width: 400px;
}

p {
  margin: 0;
}
</style>
