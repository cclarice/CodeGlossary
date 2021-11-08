import Vue from 'vue'
import Vuex from 'vuex'
import balloons from '@/store/modules/balloons'
import mainLayout from '@/store/modules/mainLayout'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    balloons,
    mainLayout
  }
})
