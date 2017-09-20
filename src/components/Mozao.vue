<template>
	<section>
		<div>
			<h2>Quiz do mozão</h2>
			<div>
				<button @click="ganhouMoral()">
					Fazer cortina de coração
				</button>
				<button @click="perdeuMoral()">
					Visualizar e não responder
				</button>
				<button @click="ganhouMoral()">
					Dar comida
				</button>
				<button @click="ganhouMoral()">
					Dar atenção
				</button>
				<button @click="ganhouMoral()">
					Fazer surpresas
				</button>
				<button @click="ganhouMoral()">
					Buscar nos lugares
				</button>
				<button @click="perdeuMoral()">
					Esquecer datas importantes
				</button>
				<button @click="perdeuMoral()">
					Trocar a namorada por jogo
				</button>
			</div>
		</div>
		<button @click="validarMozao()">Mostrar resultado</button>
		<p> {{resultado}} </p>
	</section>
</template>

<script>
	export default {
		name: 'Mozao',
		data() {
			return {
				moral: 0,
				resultado: ''
			}
		},
		methods: {
			ganhouMoral() {
				return this.moral++
			},
			perdeuMoral() {
				return this.moral--
			},
			validarMozao() {
				if (this.moral > 4) {
					return this.resultado = 'Mozão memo'
				} if (this.moral > 2) {
					return this.resultado = 'Tem que melhorar'
				} else {
					return this.resultado = 'Vai perder para o amigo'
				}
			}
		}
	}
</script>

<style scoped>
	section {
	  background-color: #fdfdfd;
	  padding: 0 1em;
	  height: 95vh;
	  background-color: #333;
	  color: #fff;
	}
	button {
		padding: 0.5em;
		margin: 0.25em;
	}
</style>