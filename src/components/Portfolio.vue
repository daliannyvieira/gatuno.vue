<template>
	<div class="container">
		<Gato
			nome='Gatonildo da Silva'
			imagem='../../static/imagens/gato01.jpg'></Gato>
		<Gato
			nome='Gatiane Mello'
			imagem='../../static/imagens/gato02.jpg'></Gato>
		<Gato
			nome='Enzo dos Santos'
			imagem='../../static/imagens/gato03.jpg'></Gato>
		<Gato
			nome='Valentina de Sá'
			imagem='../../static/imagens/gato04.jpg'></Gato>
	</div>
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