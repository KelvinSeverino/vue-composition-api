import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import { URL_API } from './configs/api'

axios.defaults.baseURL = URL_API

import './assets/main.css'

/**
 * fontawesome
 */
    /* import the fontawesome core */
    import { library } from '@fortawesome/fontawesome-svg-core'

    /* import font awesome icon component */
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

    /* import specific icons */
    import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
    import { faPenSquare } from '@fortawesome/free-solid-svg-icons'
    import { faTrash } from '@fortawesome/free-solid-svg-icons'


    /* add icons to the library */
    library.add(faCirclePlus, faPenSquare, faTrash)
/**
 * END fontawesome
 */

const app = createApp(App)

app.use(router) //Usa as rotas criadas em /src/router/index.js

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
