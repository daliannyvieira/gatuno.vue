<template>
	<section>	
		<img :src="imagem">
		<h1>{{titulo}}</h1>
		<p>{{descricao}}</p>
	</section>
</template>

<script>
	export default {
		name: 'Gato',
		props: ['imagem', 'descricao', 'titulo']
	}
</script>

<style scoped>
	img {
		max-width: 200px;
	}
</style>