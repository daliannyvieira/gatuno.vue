<template>
	<section>
		<h1>{{titulo}}</h1>
		<Gato
			titulo='gatooo'
			descricao='um gato'
			imagem='https://meusanimais.com.br/wp-content/uploads/2015/04/ronronar-gato.jpg'></Gato>
	</section>
</template>

<script>
	import Gato from './Gato'

	export default {
		name: 'Portfolio',
		data() {
			return {
				titulo: 'Portfolio'
			}
		},
		components: { Gato }
	}
</script>

<style scoped>
	section {
		display: flex;
		flex-direction: column;
		height: 95vh;
		background-color: #333;
		color: #fff;
	}
	h1 {
		padding: 0 0.5em;
	}
</style>