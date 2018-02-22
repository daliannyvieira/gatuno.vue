<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">
          <img src="../../static/imagens/home.png">
        </router-link>
      </li>
      <li>
        <router-link to="/Portfolio">
          <img src="../../static/imagens/folder.png">
        </router-link>
      </li>
      <li>
        <router-link to="/Compras">
          <img src="../../static/imagens/compras.png">
        </router-link>
      </li>
      <li>
        <router-link to="/Calculadora">
          <img src="../../static/imagens/calc.png">
        </router-link>
      </li>
      <li>
        <router-link to="/Duelo">
          <img src="../../static/imagens/duelo.png">
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'navigation',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3em;
  background-color: #fdfdfd;
  background: #fdfdfd;
  color: #333;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;  
}
ul {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
}
li {
  text-transform: uppercase;
  padding-left: 0.75em;
  font-size: 0.85em;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
li img {
  width: 25px;
  margin: 0 0.05em;
  padding: 0.5em;
}
li:nth-child(3) img {
  width: 20px;
}
li:nth-child(4) img {
  width: 20px;
}
li a {
  color: #333;
  text-decoration: none;
}
</style>
