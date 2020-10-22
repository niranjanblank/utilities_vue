import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import PasswordGenerator from './components/PasswordGenerator'
import tictactoe from './components/tictactoe'
import Utilities from './components/Utilities'
import RandomNumber from './components/RandomNumber'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
 
library.add(faFontAwesome)
library.add(faGithub)
library.add(faFacebook)
library.add(faTwitter)

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
{
path : '/', component: Utilities
},
{
path : '/tictactoe', component: tictactoe
},
{
  path: '/passwordgenerator', component: PasswordGenerator
},

{
  path: '/randomnumber', component: RandomNumber
}

]


const router = new VueRouter({routes: routes})
new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
