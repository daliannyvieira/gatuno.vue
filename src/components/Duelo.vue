<template>
	<section>
		<div>
			<h2>Gato Branco</h2>
			<p>{{ gatoBranco }}</p>
			<div>
				<button @click="addGatoBranco()">+</button>
				<button @click="removeGatoBranco()">-</button>
			</div>
		</div>
		<div>
			<h2>Gato Preto</h2>
			<p>{{ gatoPreto }}</p>
			<div>
				<button @click="addGatoPreto()">+</button>
				<button @click="removeGatoPreto">-</button>
			</div>
		</div>

		<button @click="mostraGanhador()">Mostrar ganhador</button>
		<p> {{ganhador}} </p>

	</section>
</template>

<script>
	export default {
		name: 'Duelo',
		data() {
			return {
				gatoBranco: 0,
				gatoPreto: 0,
				ganhador: ''
			}
		},
		methods: {
			addGatoBranco() {
				if (this.gatoBranco < 10){
					return this.gatoBranco++					
				} else {
					return this.gatoBranco = 0
				}
			},
			removeGatoBranco() {
				if (this.gatoBranco > 0){
					return this.gatoBranco--					
				}
			},
			addGatoPreto() {
				if (this.gatoPreto < 10){
					return this.gatoPreto++
				} else {
					return this.gatoPreto = 0
				}
			},
			removeGatoPreto() {
				if (this.gatoPreto > 0){
					return this.gatoPreto--					
				}
			},
			mostraGanhador() {
				if (this.gatoPreto > this.gatoBranco) {
					return this.ganhador = 'Gato Preto venceu'
				} if(this.gatoPreto == this.gatoBranco) {
					return this.ganhador = 'Empate!'
				} else {
					return this.ganhador = 'Gato Branco venceu'
				}
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