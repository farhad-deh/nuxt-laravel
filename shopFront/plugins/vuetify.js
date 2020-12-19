import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import 'font-awesome/css/font-awesome.min.css' // Ensure you are using css-loader


Vue.use(Vuetify)

export default new Vuetify({
  rtl: true,
  icons : {
    iconfont: 'fa',//||'faSvg'|| 'mdi' || 'md' || 'mdiSvg' ,
  }
})
