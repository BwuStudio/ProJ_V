<template>
	<div class="hello">

		<img src="../../assets/logo.png">
		<h1>{{ msg }}</h1>
		<h2>Essential Links</h2>
		<ul>

			<li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
			<li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
			<li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
			<li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
			<br>
			<li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
		</ul>
		<h2>Ecosystem</h2>
		<ul>
			<li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
			<li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
			<li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
			<li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h2 {
		font-weight: normal;
		height: 48px;line-height: 48px;
		font-size: 24px;
	}

	h1{
		font-weight: normal;
		height: 48px;line-height: 48px;
		font-size: 28px;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
		height: 36px;line-height: 36px;
		font-size: 18px;
	}

	a {
		color: #42b983;
	}

	*{
		text-align: center;
	}
</style>