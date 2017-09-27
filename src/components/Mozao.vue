<template>
	<section>
		<div>
			<h2>Quiz do mozão</h2>
			<div>
				<button v-on:click="ganhouMoral">
					Levo a crush para comer acarajé
				</button>
				<button v-on:click="ganhouMoral">
					Buscar no trabalho
				</button>
				<button v-on:click="ganhouMoral">
					Presentear fora de datas
				</button>
				<button v-on:click="perdeuMoral">
					Esquece datas
				</button>								
				<button v-on:click="perdeuMoral">
					Ciumes excessivo
				</button>
				<button v-on:click="perdeuMoral">
					Desligar o telefone na cara
				</button>
				<button v-on:click="perdeuMuitaMoral">
					Mentir para o mozão
				</button>
				<button v-on:click="perdeuMuitaMoral">
					Não falar para onde vai
				</button>
				<button v-on:click="perdeuMuitaMoral">
					Aceitar êx no face
				</button>
				<button v-on:click="gameOver">
					Trair
				</button>
				<button v-on:click="gameOver">
					Sair escondido
				</button>
				<button v-on:click="gameOver">
					Agressão física ou não
				</button>
			</div>
		</div>
		<button v-on:click="mostraResultado">Mostrar resultado</button>
		<p>{{resultado}}</p>
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
			ganhouMoral(){
				return this.moral = this.moral + 5
			},
			ganhouMuitaMoral(){
				return this.moral = this.moral + 15
			},
			perdeuMoral(){
				return this.moral = this.moral - 10
			},
			perdeuMuitaMoral(){
				return this.moral = this.moral - 20
			},
			gameOver(){
				return this.moral = 0
			},
			mostraResultado(){
				if(this.moral > 45){
					return this.resultado = 'Mozão memooo'
				} if(this.moral > 30 && this.moral < 15){
					return this.resultado = 'Tem que melhorar'
				} else {
					return this.resultado = 'chora'
				}
			}
		}
	}
</script>

<style scoped>
	section {
	  background-color: #fdfdfd;
	  padding: 0 1em;
	  background-color: #333;
	  color: #fff;
	  height: 100%;
	}
	button {
		padding: 0.25em;
		margin: 0.25em;
	}
</style>