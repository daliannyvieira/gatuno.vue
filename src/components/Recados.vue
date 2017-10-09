<template>
	<main>
		<header>
			<img :src="usuario.avatar">
			<h1>{{usuario.nome}}</h1>
			<p>{{usuario.descricao}}</p>
		</header>
		<section>
			<h2>Recados</h2>
			<ul v-for="recado in usuario.recados">
				<li>{{recado}}</li>
			</ul>
			<label>
				<span>Digite uma mensagem:</span>
				<input v-model="recado" v-on:keyup.enter="addRecado">
			</label>
		</section>
	</main>
</template>

<script>
	export default {
	  name: 'recados',
	  data () {
	    return {
	    	recado: '',
	    	usuario: {
		    	avatar: 'http://tudosobregatos.com.br/wp-content/uploads/gato-curioso-1024x683.jpg',
		    	nome: 'Gatuno',
		    	descricao: 'Ronronador',
		    	recados: ['Olá', 'oláaaa', 'oiiiii']
	    	}
	    }
	  },
	  methods: {
	  	addRecado(recado) {
	  		return this.usuario.recados.push(this.recado),
	  			   this.recado = ''
	  	}
	  }
	}
</script>

<style>

	main {
		display: flex;
		align-items: center;
		justify-content: center;
		background: #333;
		padding: 2em;
		width: 50%;
		margin: 0 auto;
		color: #fff;
	}

	header {
		width: 50%;
		padding: 2em;
	}

	section {
		width: 100%;
	}

	img {
		width: 250px;
	}
	ul {
		padding: 0;
		margin: 0;
		list-style: none;
	}
	li {
		padding: 0.5em;
		border: 1px solid #fff;
		margin: 1em;
	}
</style>