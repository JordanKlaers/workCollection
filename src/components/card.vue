<template>
	<div class="card" ref="card">
		<notifications-card></notifications-card>
	</div>
</template>

<script>
import NotificationCard from './collections/NotificationCard';
export default {
	name: 'card',
	props: {
	},
	components: {
		'notifications-card': NotificationCard
	},
	computed: {
	},
	methods: {
	},
	watch: {
	}
};
</script>
<style lang='scss' type="text/scss">
@import '~_scss_/variables';
@import '~_scss_/_mixins';
</style>


