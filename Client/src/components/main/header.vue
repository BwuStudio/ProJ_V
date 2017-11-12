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
		background-color: aqua;
	}

	.logo {
		height: 64px;
		width: 260px;
		position: absolute;
		left: 0;
		top: 0;
		background-image: url(../../assets/img/home/logo/logo.png);
	}

	.user {
		height: 64px;
		line-height: 64px;
		width: 260px;
		position: absolute;
		right: 0;
		top: 0;
	}

	.el-dropdown-link{
		height: 64px;line-height: 64px;
		display: block;
		cursor: default;
	}

	.el-dropdown-link:hover{
		background-color: #efefef;
	}

	.el-dropdown-link div{
		float: left;
		height: 64px;line-height: 64px;
		padding: 0 4px
	}

	.el-dropdown-link div:first-child{
		padding-left: 24px
	}

	.el-dropdown-link div:last-child{
		padding-right: 24px
	}

	.el-dropdown-link .iconfont {
		line-height: 64px;
		font-size: 36px
	}

	.el-dropdown-link .user-name {
		font-size: 18px
	}
</style>