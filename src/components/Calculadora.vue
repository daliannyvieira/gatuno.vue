<template>
	<section>
		<h2>Use essa calculadora para se planejar</h2>
		<input v-model="valor01">
		<input v-model="valor02">
		<div>
			<button v-on:click="soma()">+</button>
			<button v-on:click="multiplica()">x</button>
			<button v-on:click="divide()">/</button>
			<button v-on:click="subtrai()">-</button>
			<p>Resultado: {{resultado}}</p>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'Portfolio',
		data() {
			return {
				valor01: 0,
				valor02: 0,
				resultado: 0
			}
		},
		methods: {
			soma() {
				return this.resultado = parseFloat(this.valor01) + parseFloat(this.valor02);
			},
			multiplica() {
				return this.resultado = parseFloat(this.valor01) * parseFloat(this.valor02);
			},
			divide() {
				return this.resultado = parseFloat(this.valor01) / parseFloat(this.valor02);
			},			
			subtrai() {
				return this.resultado = parseFloat(this.valor01) - parseFloat(this.valor02);
			}
		}
	}
</script>

<style scoped>
	section {
		display: flex;
		flex-direction: column;
		height: 95vh;
		background-color: #333;
		color: #fff;
		padding: 0.5em;
	}
	input {
		width: 100%;
	}
	h1 {
		padding: 0 0.5em;
	}
	button {
		max-width: 2em;
	}
	div {
		padding: 0.5em;
	}
</style>