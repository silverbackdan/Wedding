import Vue from 'vue'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

// import regular from '@fortawesome/fontawesome-free-regular'
import fontawesome from '@fortawesome/fontawesome'
import faTrashAlt from '@fortawesome/fontawesome-free-solid/faTrashAlt'

fontawesome.library.add(
  faTrashAlt
)

Vue.use(FontAwesomeIcon)
Vue.component('font-awesome-icon', FontAwesomeIcon)

export default fontawesome
