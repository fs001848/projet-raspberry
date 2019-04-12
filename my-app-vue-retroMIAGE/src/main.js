import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import VueRouter from 'vue-router';
import AffichageJeux from './components/AffichageJeux';
import AjoutRom from './components/AjoutRom';
import Accueil from './components/Accueil';

Vue.use(VueRouter);

Vue.use(Vuetify, {
    iconfont: 'mdi'
});

const routes = [
    {path:'/affichageJeux', component: AffichageJeux},
    {path:'/ajoutRom', component: AjoutRom},
    {path:'/', component: Accueil}
];

const router = new VueRouter({
    routes: routes,
    mode:'history'
});

new Vue({
    el: '#app',
    router:router,
    render: h => h(App)
});
