<template>
	<section>
		<h1>{{titulo}}</h1>
		<div>
			<img src="https://meusanimais.com.br/wp-content/uploads/2015/04/ronronar-gato.jpg">
			<img src="https://meusanimais.com.br/wp-content/uploads/2015/04/ronronar-gato.jpg">
			<img src="https://meusanimais.com.br/wp-content/uploads/2015/04/ronronar-gato.jpg">
			<img src="https://meusanimais.com.br/wp-content/uploads/2015/04/ronronar-gato.jpg">
			<img src="https://meusanimais.com.br/wp-content/uploads/2015/04/ronronar-gato.jpg">
		</div>
	</section>
</template>

<script>
	export default {
		name: 'Portfolio',
		data() {
			return {
				titulo: 'Portfolio'
			}
		}
	}
</script>

<style scoped>
	section {
		display: flex;
		flex-wrap: wrap;
		height: 95vh;
		background-color: #333;
		color: #fff;
	}
	h1 {
		padding: 0 0.5em;
	}
	img {
		max-width: 45%;
		max-height: 100px;
	}
</style>