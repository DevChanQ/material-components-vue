import AutoComplete from './AutoComplete.vue'
//import './styles.scss'

import { initPlugin } from '../'

const plugin = {
  install (vm) {
    vm.component('m-autocomplete', AutoComplete)
  }
}
export default plugin

initPlugin(plugin)
