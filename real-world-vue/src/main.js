import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

/* This is a function that allows you to pass in 3 arguments:
A directory to search within.
A flag indicating whether subdirectories should be searched, too.
A regular expression to match files against. */
const requireComponent = require.context(
  './components', // the relative path of the directory to search
  false, // subdirectories will not be searched
  /Base[A-Z]\w+\.(vue|js)$/ // regular expression that searches for components starting with "Base" and ending in .vue or .js
)
// keys() gets us an array of each file so we can iterate through each and then get the object exported using requireComponent so we can globally register each, which we’ll do below.
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )
  // telling Vue to look for the component options on .default, which will exist if the component was exported with export default. Otherwise, Vue will fall back to the module’s root, which is what’s exported when using module.exports = instead of export default.
  Vue.component(componentName, componentConfig.default || componentConfig)
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
