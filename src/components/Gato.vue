<template>
	<div class='usuario-perfil'>
		<img class="usuario-imagem" :src="imagem">
		<span class="usuario-nome">{{nome}}</span>
	 </div>
</template>

<script>
	export default {
		name: 'Gato',
		props: ['imagem', 'nome']
	}
</script>

<style scoped>
	img {
		max-width: 200px;
	}

</style>

<style scoped>
  .usuario-perfil {
    display: flex;
    align-items: center;
    justify-content: center;
 	  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  	border-radius: 2px;
  	width: 300px;
    padding: 0.25rem 1rem;
    margin: 0.15rem 0;
  	background-color: #fff;
  }

  .usuario-nome {
    width: 100%;
    padding: 0.25rem 2rem;
    font-weight: 700;
  	color: #333;
  }

  .usuario-imagem {
    border-radius: 100%;
    width: 80px;
    height: 80px;
  }

</style>
