import * as actions from './actions';
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {},
	mutations: {},
	getters: {},
	actions,
	modules: {}
});

export default store;