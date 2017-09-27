<template>
	<section>
		<label>Qual sua idade?</label>
		<input v-model="idade" v-on:keyup.enter="podeVotar">
		<button v-on:click="podeVotar">posso votar?</button>
		<p v-if="idade != 0">Você tem {{idade}} anos. {{resposta}}</p>
		<img :src="meme">
	</section>
</template>

<script>
	export default {
		name: 'Duelo',
		data() {
			return {
				idade: 0,
				resposta: '',
				meme: ''
			}
		},
		methods: {
			podeVotar(){
				if(this.idade >= 18 && this.idade < 60){
					return this.meme = '',
						   this.resposta = 'Você é obrigado a votar'
				} if(this.idade >= 16 && this.idade < 18) {
					return this.meme = '',
						   this.resposta = 'Você vota se você quiser'
				} if(this.idade >= 60 && this.idade < 100){
					return this.meme = '',
						   this.resposta = 'Você vota se tu quiser'
				} if(this.idade >= 100) {
					return this.meme = 'http://www.3dejulhonoticias.com.br/wp-content/uploads/2013/10/idosa-de-111-anos-atribui-longevidade-a-bebida-e-cigarro.jpg',
						   this.resposta = 'Você tem que tá em casa'
				} if(this.idade < 16 && this.idade > 2){
					return this.meme ='',
						   this.resposta = 'Você não vota'
				} else {
					return this.meme = 'http://s2.glbimg.com/kQa_k6LrTiKAl9mvsgnGfUfgdnGUsYurkLDaM7tDQ4VobLfVneBRSxIt72Hjx_NZ/e.glbimg.com/og/ed/f/original/2013/03/28/shutterstock_127815176.jpg',
						   this.resposta = 'Você é um bb'				}
			}
		}
	}
</script>

<style scoped>
	section {
	  background-color: #fdfdfd;
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: center;
	  padding: 0 2em;
	  height: 95vh;
	  background-color: #333;
	  color: #fff;
	}

	.time {
		border: 1px solid #fff;
		margin: 20px;
		width: 400px;
		height: 300px;
	}

	div {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	div > p {
		margin: 0;
		border: 1px solid #fff;
		width: 2em;
		padding: 0.75em 0.5em;
	}

	div > div {
		display: flex;
		flex-direction: row;
		margin-top: 1em;
	}

	button {
		padding: 0.5em 0.75em;
	}

	section > button {
		margin: 1em;
	}
</style>