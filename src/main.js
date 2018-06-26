// css
import 'bootstrap/scss/bootstrap.scss';
import './style.scss';

// js
import Vue from 'vue';
import App from './App.vue';

// init
new Vue({
    el: '#app',
    render: h=> h(App)
});