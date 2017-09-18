<template>
  <section>
    <img src="http://www.blogdogato.com.br/wp-content/uploads/como-evitar-arranhoes-do-seu-gato.jpg" alt="gato">
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

p {
  margin: 0;
}
</style>
