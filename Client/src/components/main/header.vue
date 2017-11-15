<template>
	<div class="header">

	</div>
</template>

<script>
	export default {
		name: 'bwu-header',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}

</script>

<style scoped>
	.header {
		height: 144px;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
	}

	.logo {
		height: 64px;
		width: 260px;
		position: absolute;
		left: 0;
		top: 0;
		background-image: url(../../assets/img/home/logo/logo.png);
	}

</style>