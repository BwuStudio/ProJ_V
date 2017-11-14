<template>
	<div class="mask">
		<div class="panel md-h3" :style="panel_style">
			<div class="panel-head">
				<div class="btn-close">
				</div>
				<slot name='head'>
					<div class="head-title">{{title}}</div>
				</slot>
			</div>
			<div class="panel-body">
				<slot name='body'>
					只有在没有要分发的内容时才会显示。
				</slot>
			</div>
			<div class="panel-foot">
				<slot name='foot'>
					只有在没有要分发的内容时才会显示。
				</slot>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		name: 'bwu-modal',
		props: ['title','width','height','headHeight','footHeight'],
		data() {
			return {
				panel_style: {
					width: this.width?this.width:'400px',
					height: this.height?this.height:'300px',
					paddingTop: this.headHeight?this.headHeight:'32px',
					paddingBottom: this.footHeight?this.footHeight:'32px',
				},
				head_style:{
					height: this.headHeight?this.headHeight:'32px',
				},
				foot_style:{
					height: this.footHeight?this.footHeight:'32px',
				}
			}
		},
		methods: {
		},
		mounted: function () {
		}
	}



</script>

<style scoped>
	.panel {
		position: absolute;
		left:50%;top:45%;
		transform: translate(-50%,-45%);
		background-color: #66ccff;
		border-radius: 4px;
	}
</style>