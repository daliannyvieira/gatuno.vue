import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Portfolio from '@/components/Portfolio'
import Compras from '@/components/Compras'
import Calculadora from '@/components/Calculadora'
import Duelo from '@/components/Duelo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/Compras',
      name: 'Compras',
      component: Compras
    },
    {
      path: '/Calculadora',
      name: 'Calculadora',
      component: Calculadora
    },
    {
      path: '/Duelo',
      name: 'Duelo',
      component: Duelo
    }
  ]
})
