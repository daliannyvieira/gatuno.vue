<template>
	<section>
		<h1>{{titulo}}</h1>
			<img 
				src="../../static/imagens/gato07.jpg"
				v-on:click="botaCaraNoSol()">
			<p>Item: Ronrom</p>
			<img :src="img" v-if="img === 'https://meusanimais.com.br/wp-content/uploads/2015/03/4-gato-enfermo.jpg'">
			<p>{{meme}}</p>
		<div>
			<button v-on:click="contaClique()">
				<span>+</span>
			</button>
			<button v-on:click="removeClique()">
				<span>-</span>
			</button>
			<button v-on:click="limpaClique()">
				<span>limpar carrinho</span>
			</button>
		</div>
		<p>Quantidade: {{clique}} </p>
		<p>
			<span>Valor Total:</span>
			<span>{{(clique * preco)}}</span>
			<span v-if="clique != 0">{{moeda}}</span>
		</p>
	</section>
</template>

<script>
	export default {
		name: 'Portfolio',
		data() {
			return {
				titulo: 'Carrinho de compras',
				img: '',
				meme: '',
				clique: 0,
				preco: 10,
				moeda: 'reais.'
			}
		},
		methods: {
			botaCaraNoSol() {
				return this.img = 'https://meusanimais.com.br/wp-content/uploads/2015/03/4-gato-enfermo.jpg',
					   this.meme = 'bota a cara no sol mana';
			},
			contaClique() {
				return this.clique++
			},
			removeClique() {
				if (this.clique > 0){
					return this.clique--
				}
			},
			limpaClique() {
				return this.clique = 0
			}
		}
	}
</script>

<style scoped>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 95vh;
		padding: 0;
		margin: 0;
		background-color: #333;
		color: #fff;
	}
	h1 {
		padding: 0 0.5em;
	}
	img {
		max-width: 45%;
		align-self: center;
		height: 200px;
		width: 200px;
		border-radius: 50%;
		border: 5px solid white;
	}
	div {
		padding: 0.5em;
	}
	p {
		margin-bottom: 0;
	}
</style>