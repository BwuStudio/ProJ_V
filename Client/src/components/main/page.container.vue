<template>
	<div class="page_container">
		<el-tabs class="page-tabs md-h6" v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
			<el-tab-pane style="height:100%" :key="item.name" v-for="(item, index) in editableTabs" :label="item.title" :name="item.name">
				<router-view :name='item.src'></router-view>
			</el-tab-pane>
		</el-tabs>

		<transition name="fade">
			<bwu-modal v-if='showPanel' :isShow.sync='showPanel' :title='"临时"'>
				<el-tree slot='body' :data="allPages" :props="defaultProps" @node-click="handleNodeClick">
				</el-tree>
			</bwu-modal>
		</transition>

	</div>
</template>

<script>
	import Pages from '@/router/RouterLabel'

	export default {
		name: "bwu-pageContainer",
		components: {
		},
		data() {
			return {
				editableTabsValue: "root-home-Page_2",
				editableTabs: this.$store.state.allPages,
				// editableTabs: [{
				// 	title: 'Tab 1',
				// 	name: '1',
				// 	content: 'Tab 1 content'
				// }, {
				// 	title: 'Tab 2',
				// 	name: '2',
				// 	content: 'Tab 2 content'
				// }],
				tabIndex: 3,
				showPanel: true,
				allPages: [Pages],
				defaultProps: {
					children: 'children',
					label: 'label'
				}
			};
		},
		methods: {
			handleTabsEdit(targetName, action) {
				console.log(targetName)

				if (action === "add") {
					// let newTabName = ++this.tabIndex + "";
					// this.editableTabs.push({
					// 	title: "New Tab",
					// 	name: newTabName,
					// 	content: "New Tab content"
					// });
					// this.editableTabsValue = newTabName;
					this.showPanel = true
				}
				if (action === "remove") {
					let tabs = this.editableTabs;
					let activeName = this.editableTabsValue;
					let closeIndex

					if (activeName === targetName) {
						tabs.forEach((tab, index) => {
							if (tab.name === targetName) {
								closeIndex = index
								let nextTab = tabs[index + 1] || tabs[index - 1];
								if (nextTab) {
									activeName = nextTab.name;
								}
							}
						});
					}

					this.$store.commit('removePage',closeIndex)

					this.editableTabsValue = activeName;
					this.editableTabs = tabs.filter(tab => tab.name !== targetName);
				}
			},
			handleNodeClick(data) {
				console.log(data);
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
	.el-tabs__nav-scroll {
		height: 36px;
		line-height: 36px;
	}

	.el-tabs__item {
		height: 36px;
		line-height: 34px;
	}

	.el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
		border-radius: 0;
	}

	.el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
		border-top-color: transparent;
	}

	.el-tabs--card>.el-tabs__header .el-tabs__item.is-active:first-child {
		border-left-color: transparent;
	}

	.el-tabs__nav-next {
		line-height: 37px;
	}

	.el-tabs__nav-prev {
		line-height: 37px;
	}

	.el-tabs__new-tab {
		margin: 9px;
		z-index: 1;
		position: relative
	}

	.el-tabs__header {
		margin: 0;
	}

	.el-tabs__nav-scroll {
		z-index: 1;
		position: relative
	}

	.el-tabs__content {
		height: 100%;
		top: -36px;
		padding-top: 36px;
	}
</style>