<template>
	<div id="app">
		<banner></banner>
		<search-filter></search-filter>
		<region-filter></region-filter>
		<div class="card-container ie-fallback m-30" ref='card-container'>
			<card></card>
		</div>
	</div>
</template>

<script>
import Card from './components/Card';
import Banner from './components/Banner';
import SearchFilter from './components/SearchFilter';
import RegionFilter from './components/RegionFilter';
import { mapGetters } from 'vuex';
import { getCountriesAll } from '_store_/actions.js';
import 'babel-polyfill';
export default {
	name: 'app',
	components: {
		Banner,
		Card,
		'search-filter': SearchFilter,
		'region-filter': RegionFilter
	},
	data() {
		return {
			regionsFilterList: [],
			searchValue: ''
		}
	},
	mounted() {
		this.$store.dispatch('getCountriesAll');
		if (this.isInternetExplorer) {
			this.$refs['card-container'].classList.add('ie-fallback');
		}
	}
};
</script>
<style lang='scss' type='text/css'>
@import '~_scss_/app';
</style>
<style type='text/css'>
@import '~_icomoon_/style.css';
</style>
