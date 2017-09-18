<template>
  <div id="app">
    <router-view></router-view>
    <Navigation></Navigation>
  </div>
</template>

<script>
import Navigation from './components/Navigation'

export default {
  name: 'app',
  components: {Navigation}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 97vh;
}
img {
  max-width: 100%;
}
</style>
