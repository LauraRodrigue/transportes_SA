import { createApp } from 'vue'
import{router} from "./routers/routers.js"
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import App from './App.vue'

const app = createApp(App);

app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
  })

app.use(router);

app.mount('#app');

