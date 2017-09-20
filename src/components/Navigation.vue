<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">
          <img src="../assets/home.png">
        </router-link>
      </li>
      <li>
        <router-link to="/Portfolio">
          <img src="../assets/folder.png">
        </router-link>
      </li>
      <li>
        <router-link to="/Compras">
          <img src="../assets/compras.png">
        </router-link>
      </li>
      <li>
        <router-link to="/Calculadora">
          <img src="../assets/calc.png">
        </router-link>
      </li>
      <li>
        <router-link to="/Duelo">
          <img src="../assets/duelo.png">
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
  height: 10vh;
  background-color: #fdfdfd;
  color: #333;
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
