<template>
	<div class="page_container">
		<el-tabs class="page-tabs md-h6" v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
			<el-tab-pane style="height:100%" :key="item.name" v-for="(item, index) in editableTabs" :label="item.title" :name="item.name">
				<router-view  name='page-1'></router-view>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>

	export default {
		name: "bwu-pageContainer",
		components:{
		},
		data() {
			return {
				editableTabsValue: "2",
				editableTabs: [
					{
						title: "Tab 1",
						name: "1",
						content: "Tab 1 content",
						src: "page_1"
					},
					{
						title: "Tab 2",
						name: "2",
						content: "Tab 2 content",
						src: "hell_o"
					}
				],
				tabIndex: 2
			};
		},
		methods: {
			handleTabsEdit(targetName, action) {
				if (action === "add") {
					let newTabName = ++this.tabIndex + "";
					this.editableTabs.push({
						title: "New Tab",
						name: newTabName,
						content: "New Tab content"
					});
					this.editableTabsValue = newTabName;
				}
				if (action === "remove") {
					let tabs = this.editableTabs;
					let activeName = this.editableTabsValue;
					if (activeName === targetName) {
						tabs.forEach((tab, index) => {
							if (tab.name === targetName) {
								let nextTab = tabs[index + 1] || tabs[index - 1];
								if (nextTab) {
									activeName = nextTab.name;
								}
							}
						});
					}

					this.editableTabsValue = activeName;
					this.editableTabs = tabs.filter(tab => tab.name !== targetName);
				}
			}
		}
	};
</script>

<style scoped>
	.page_container {
		position: relative;
		height: 100%;
		width: 100%;
		padding: 18px 18px 18px 18px;
		overflow: auto;
	}

	.page-tabs {
		background-color: rgb(248, 248, 248);
		height: 100%;
		background-color: #fff;
	}
</style>

<style>
	.el-tabs__nav-scroll{
		height: 36px;line-height: 36px;
	}

	.el-tabs__item{
		height: 36px;line-height: 34px;
	}

	.el-tabs--card > .el-tabs__header .el-tabs__item.is-active{
		border-radius: 0;
	}
	.el-tabs--card > .el-tabs__header .el-tabs__item.is-active{
		border-top-color:transparent;
	}
	.el-tabs--card > .el-tabs__header .el-tabs__item.is-active:first-child{
		border-left-color:transparent;
	}
	.el-tabs__nav-next{
		line-height:37px;
	}
	.el-tabs__nav-prev{
		line-height:37px;
	}
	.el-tabs__new-tab{
		margin:9px;z-index: 1;position: relative
	}
	.el-tabs__header{
		margin: 0;
	}
	.el-tabs__nav-scroll{
		z-index: 1;position: relative
	}
	.el-tabs__content{
		height: 100%;top:-36px;padding-top: 36px;
	}
</style>